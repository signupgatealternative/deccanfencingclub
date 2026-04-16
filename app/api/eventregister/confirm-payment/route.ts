// app/api/eventregister/confirm-payment/route.ts

import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';
import { transporter } from '@/lib/mailer';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const EMAIL_USER  = process.env.EMAIL_USER;
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

    if (!EMAIL_USER || !ADMIN_EMAIL) {
      return NextResponse.json(
        { success: false, message: 'Server misconfiguration.' },
        { status: 500 }
      );
    }

    const formData = await req.formData();

    const name          = String(formData.get('name')          || '');
    const email         = String(formData.get('email')         || '');
    const phone         = String(formData.get('phone')         || '');
    const category      = String(formData.get('category')      || '');
    const weapon        = String(formData.get('weapon')        || '');
    const transactionId = String(formData.get('transactionId') || '');
    const paymentFile   = formData.get('paymentFile') as File | null;

    if (!transactionId) {
      return NextResponse.json(
        { success: false, message: 'Transaction ID is required.' },
        { status: 400 }
      );
    }

    // ─── Upload Payment Screenshot ───
    let paymentUrl = '';
    if (paymentFile && paymentFile.size > 0) {
      try {
        const buffer = Buffer.from(await paymentFile.arrayBuffer());
        const upload = await cloudinary.uploader.upload(
          `data:${paymentFile.type};base64,${buffer.toString('base64')}`,
          { folder: 'payment_proofs', resource_type: 'image' }
        );
        paymentUrl = upload.secure_url;
      } catch (uploadErr) {
        console.error('Payment screenshot upload error:', uploadErr);
        return NextResponse.json(
          { success: false, message: 'Failed to upload screenshot. Please try again.' },
          { status: 500 }
        );
      }
    }

    // ─── Email to Admin ───
    await transporter.sendMail({
      from:    EMAIL_USER,
      to:      ADMIN_EMAIL,
      subject: `💰 Payment Received – ${name} (${category} ${weapon})`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px;">
          <h2 style="color: #C9A84C;">Payment Confirmation – Deccan Open 2026</h2>

          <h3>Participant</h3>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding: 0.4rem; font-weight: bold; width: 160px;">Name</td><td>${name}</td></tr>
            <tr><td style="padding: 0.4rem; font-weight: bold;">Email</td><td>${email}</td></tr>
            <tr><td style="padding: 0.4rem; font-weight: bold;">Phone</td><td>${phone}</td></tr>
            <tr><td style="padding: 0.4rem; font-weight: bold;">Category</td><td>${category}</td></tr>
            <tr><td style="padding: 0.4rem; font-weight: bold;">Weapon</td><td>${weapon}</td></tr>
          </table>

          <h3 style="color: #C9A84C; margin-top: 1.5rem;">Payment Details</h3>
          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 0.4rem; font-weight: bold; width: 160px;">Transaction / UTR ID</td>
              <td style="font-size: 1.1rem; font-weight: bold; color: #2e7d32;">${transactionId}</td>
            </tr>
            <tr>
              <td style="padding: 0.4rem; font-weight: bold;">Amount</td>
              <td>₹1,000</td>
            </tr>
            <tr>
              <td style="padding: 0.4rem; font-weight: bold;">Screenshot</td>
              <td>
                ${paymentUrl
                  ? `<a href="${paymentUrl}" style="color:#C9A84C;">View Screenshot</a>`
                  : '<span style="color:#888;">Not uploaded</span>'
                }
              </td>
            </tr>
          </table>

          <hr style="margin: 1.5rem 0;" />
          <p style="font-size: 0.8rem; color: #888;">
            Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
          </p>
        </div>
      `,
    });

    // ─── Confirmation Email to User ───
    try {
      await transporter.sendMail({
        from:    EMAIL_USER,
        to:      email,
        subject: 'Payment Received – Deccan Open 2026',
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; background: #07080A; color: #F5F0E8; padding: 2rem;">
            <h2 style="color: #C9A84C;">Payment Confirmation Received!</h2>
            <p>Hi <strong>${name}</strong>,</p>
            <p>We have received your payment details and will verify them shortly.</p>

            <table style="width:100%; margin: 1rem 0; border-collapse: collapse;">
              <tr><td style="padding: 0.4rem; color: #C9A84C; width: 160px;">Transaction ID</td><td>${transactionId}</td></tr>
              <tr><td style="padding: 0.4rem; color: #C9A84C;">Amount</td><td>₹1,000</td></tr>
              <tr><td style="padding: 0.4rem; color: #C9A84C;">Category</td><td>${category} – ${weapon}</td></tr>
            </table>

            <p>You will receive a final confirmation once your payment is verified.</p>
            <hr style="border-color: rgba(201,168,76,.3); margin: 1.5rem 0;" />
            <p style="font-size: 0.85rem; color: rgba(245,240,232,.5);">⚔ Deccan Fencing Club · Hyderabad</p>
          </div>
        `,
      });
    } catch (userMailErr) {
      console.error('User confirmation email error:', userMailErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Payment details submitted successfully.',
    });

  } catch (err) {
    console.error('Payment Confirmation Error:', err);
    return NextResponse.json(
      { success: false, message: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}