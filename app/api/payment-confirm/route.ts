import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/lib/mailer';

// (Optional) Google Sheets helper
// import { markUserPaid } from '@/lib/googleSheets';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, paymentId } = body;

    // ✅ Basic validation
    if (!email || !paymentId) {
      return NextResponse.json(
        { success: false, message: 'Missing email or paymentId' },
        { status: 400 }
      );
    }

    // ✅ (Optional) Update DB / Google Sheet
    // await markUserPaid(email, paymentId);

    // ✅ Send confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Payment Confirmed ✅ - Deccan Open 2026",
      html: `
        <h2>Payment Successful</h2>
        <p>Your slot is <b>confirmed</b> for Deccan Open 2026.</p>
        <p><b>Payment ID:</b> ${paymentId}</p>
        <br/>
        <p>We look forward to seeing you at the event ⚔</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('Payment Confirm Error:', err);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}