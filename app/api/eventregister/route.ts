// import { NextRequest, NextResponse } from 'next/server';
// import cloudinary from '@/lib/cloudinary';
// import { transporter } from '@/lib/mailer';
// import { appendRow } from '@/lib/googleSheets';

// export const runtime = 'nodejs';

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();

//     // 🔹 Basic Info
//     const name = formData.get('name');
//     const parentName = formData.get('parentName');
//     const email = formData.get('email');
//     const phone = formData.get('phone');
//     const dob = formData.get('dob');
//     const category = formData.get('category');
//     const weapon = formData.get('weapon');
//     const club = formData.get('club');
//     const tshirt = formData.get('tshirt');
//     const notes = formData.get('notes');

//     // 🔹 Address
//     const street1 = formData.get('street1');
//     const street2 = formData.get('street2');
//     const city = formData.get('city');
//     const state = formData.get('state');
//     const pin = formData.get('pin');
//     const country = formData.get('country');

//     // 🔹 Files
//     const aadhaarFile = formData.get('aadhaarFile') as File | null;
//     const paymentFile = formData.get('paymentFile') as File | null;

//     // 🔹 Upload Aadhaar
//     let aadhaarUrl = '';
//     if (aadhaarFile) {
//       const buffer = Buffer.from(await aadhaarFile.arrayBuffer());

//       const upload = await cloudinary.uploader.upload(
//         `data:${aadhaarFile.type};base64,${buffer.toString('base64')}`,
//         { folder: 'aadhaar_docs' }
//       );

//       aadhaarUrl = upload.secure_url;
//     }

//     // 🔹 Upload Payment Screenshot (optional)
//     let paymentUrl = '';
//     if (paymentFile) {
//       const buffer = Buffer.from(await paymentFile.arrayBuffer());

//       const upload = await cloudinary.uploader.upload(
//         `data:${paymentFile.type};base64,${buffer.toString('base64')}`,
//         { folder: 'payment_proofs' }
//       );

//       paymentUrl = upload.secure_url;
//     }
//     // 🔹 Save to Google Sheets (INITIAL STATUS)
//     try {
//     await appendRow([
//         name,
//         email,
//         phone,
//         category,
//         "PENDING",
//         "",
//         aadhaarUrl,
//         paymentUrl || "NOT UPLOADED",
//         new Date().toISOString()
//     ]);
//     } catch (err) {
//     console.error("Google Sheets Error:", err);
//     }

//     // 🔹 UPI
//     const upiId = "7671066509@hdfc";
//     const amount = "1000";
//     const nameUPI = "Deccan Fencing Club";

//     const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(nameUPI)}&am=${amount}&cu=INR`;

//     const qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;

//     // 🔹 Email to User
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email as string,
//       subject: "Registration Received - Deccan Open 2026",
//       html: `
//         <h2>Hi ${name},</h2>
//         <p>Your registration has been received.</p>
//         <p><b>Complete payment to confirm your slot:</b></p>
//         <img src="${qrImage}" />
//         <p>UPI ID: ${upiId}</p>
//         <p>Amount: ₹1000</p>
//         <p>After payment, keep the screenshot for reference.</p>
//       `,
//     });

//     // 🔹 Email to Admin
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.ADMIN_EMAIL,
//       subject: "New Registration",
//       html: `
//         <h3>New Participant</h3>

//         <p><b>Name:</b> ${name}</p>
//         <p><b>Parent:</b> ${parentName}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>DOB:</b> ${dob}</p>

//         <p><b>Category:</b> ${category}</p>
//         <p><b>Weapon:</b> ${weapon}</p>
//         <p><b>Club:</b> ${club}</p>
//         <p><b>Hand:</b> ${tshirt}</p>

//         <h4>Address</h4>
//         <p>${street1}, ${street2}</p>
//         <p>${city}, ${state} - ${pin}</p>
//         <p>${country}</p>

//         <p><b>Notes:</b> ${notes}</p>

//         <p><b>Aadhaar:</b> <a href="${aadhaarUrl}">View</a></p>
//         ${
//           paymentUrl
//             ? `<p><b>Payment Proof:</b> <a href="${paymentUrl}">View</a></p>`
//             : `<p><b>Payment Proof:</b> Not uploaded</p>`
//         }
//       `,
//     });

//     return NextResponse.json({
//       success: true,
//       qr: qrImage,
//       upiLink,
//     });

//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false }, { status: 500 });
//   }
// }

// import { NextRequest, NextResponse } from 'next/server';
// import cloudinary from '@/lib/cloudinary';
// import { transporter } from '@/lib/mailer';

// export const runtime = 'nodejs';

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();

//     // ─── BASIC INFO ───
//     const name = String(formData.get('name') || '');
//     const parentName = String(formData.get('parentName') || '');
//     const email = String(formData.get('email') || '');
//     const phone = String(formData.get('phone') || '');
//     const dob = String(formData.get('dob') || '');
//     const category = String(formData.get('category') || '');
//     const weapon = String(formData.get('weapon') || '');
//     const club = String(formData.get('club') || '');
//     const tshirt = String(formData.get('tshirt') || '');
//     const notes = String(formData.get('notes') || '');

//     // ─── ADDRESS ───
//     const street1 = String(formData.get('street1') || '');
//     const street2 = String(formData.get('street2') || '');
//     const city = String(formData.get('city') || '');
//     const state = String(formData.get('state') || '');
//     const pin = String(formData.get('pin') || '');
//     const country = String(formData.get('country') || '');

//     // ─── FILES ───
//     const aadhaarFile = formData.get('aadhaarFile') as File | null;

//     let aadhaarUrl = '';

//     if (aadhaarFile) {
//       const buffer = Buffer.from(await aadhaarFile.arrayBuffer());

//       const upload = await cloudinary.uploader.upload(
//         `data:${aadhaarFile.type};base64,${buffer.toString('base64')}`,
//         { folder: 'aadhaar_docs' }
//       );

//       aadhaarUrl = upload.secure_url;
//     }

//     // ─── UPI QR ───
//     const upiId = "7671066509@hdfc";
//     const amount = "1000";
//     const nameUPI = "Deccan Fencing Club";

//     const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
//       nameUPI
//     )}&am=${amount}&cu=INR`;

//     const qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
//       upiLink
//     )}`;

//     // ─── VALIDATION ───
//     if (!email || !name) {
//       return NextResponse.json(
//         { success: false, message: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     // ─── EMAIL TO USER ───
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Registration Received - Deccan Open 2026',
//       html: `
//         <h2>Hi ${name},</h2>
//         <p>Your registration has been successfully received.</p>

//         <h3>Payment Details</h3>
//         <p>Scan QR below to pay ₹1000:</p>
//         <img src="${qrImage}" width="200"/>

//         <p><b>UPI ID:</b> ${upiId}</p>

//         <p>We will confirm your slot after payment verification.</p>
//       `,
//     });

//     // ─── EMAIL TO ADMIN ───
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.ADMIN_EMAIL,
//       subject: 'New Registration - Deccan Open 2026',
//       html: `
//         <h2>New Registration</h2>

//         <p><b>Name:</b> ${name}</p>
//         <p><b>Parent:</b> ${parentName}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>DOB:</b> ${dob}</p>

//         <p><b>Category:</b> ${category}</p>
//         <p><b>Weapon:</b> ${weapon}</p>
//         <p><b>Club:</b> ${club}</p>
//         <p><b>Hand:</b> ${tshirt}</p>

//         <h3>Address</h3>
//         <p>${street1}, ${street2}</p>
//         <p>${city}, ${state} - ${pin}</p>
//         <p>${country}</p>

//         <p><b>Notes:</b> ${notes}</p>

//         <p><b>Aadhaar:</b> ${aadhaarUrl ? `<a href="${aadhaarUrl}">View</a>` : 'Not uploaded'}</p>
//       `,
//     });

//     // ─── RESPONSE ───
//     return NextResponse.json({
//       success: true,
//       message: 'Registration submitted successfully',
//       qr: qrImage,
//       upiLink,
//     });
//   } catch (err) {
//     console.error('Registration Error:', err);

//     return NextResponse.json(
//       {
//         success: false,
//         message: 'Server error. Please try again.',
//       },
//       { status: 500 }
//     );
//   }
// }


import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';
import { transporter } from '@/lib/mailer';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    // ─── VALIDATE ENV VARS FIRST ───
    const EMAIL_USER   = process.env.EMAIL_USER;
    const ADMIN_EMAIL  = process.env.ADMIN_EMAIL;

    if (!EMAIL_USER || !ADMIN_EMAIL) {
      console.error('Missing env vars:', { EMAIL_USER: !!EMAIL_USER, ADMIN_EMAIL: !!ADMIN_EMAIL });
      return NextResponse.json(
        { success: false, message: 'Server misconfiguration: missing email env vars.' },
        { status: 500 }
      );
    }

    const formData = await req.formData();

    // ─── BASIC INFO ───
    const name       = String(formData.get('name')       || '');
    const parentName = String(formData.get('parentName') || '');
    const email      = String(formData.get('email')      || '');
    const phone      = String(formData.get('phone')      || '');
    const dob        = String(formData.get('dob')        || '');
    const category   = String(formData.get('category')   || '');
    const weapon     = String(formData.get('weapon')     || '');
    const club       = String(formData.get('club')       || '');
    const tshirt     = String(formData.get('tshirt')     || '');
    const notes      = String(formData.get('notes')      || '');

    // ─── ADDRESS ───
    const street1 = String(formData.get('street1') || '');
    const street2 = String(formData.get('street2') || '');
    const city    = String(formData.get('city')    || '');
    const state   = String(formData.get('state')   || '');
    const pin     = String(formData.get('pin')     || '');
    const country = String(formData.get('country') || '');

    // ─── VALIDATION ───
    if (!email || !name) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields: name and email are required.' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // ─── FILES ───
    const aadhaarFile = formData.get('aadhaarFile') as File | null;
    let aadhaarUrl = '';

    if (aadhaarFile && aadhaarFile.size > 0) {
      try {
        const buffer = Buffer.from(await aadhaarFile.arrayBuffer());
        const upload = await cloudinary.uploader.upload(
  `data:${aadhaarFile.type};base64,${buffer.toString('base64')}`,
  {
    folder: 'aadhaar_docs',
    resource_type: aadhaarFile.type === 'application/pdf' ? 'raw' : 'image',
  }
);
        aadhaarUrl = upload.secure_url;
      } catch (uploadErr) {
        console.error('Cloudinary upload error:', uploadErr);
        return NextResponse.json(
          { success: false, message: 'Failed to upload Aadhaar document. Please try again.' },
          { status: 500 }
        );
      }
    }

    // ─── UPI QR ───
    const upiId   = '7671066509@hdfc';
    const amount  = '1000';
    const nameUPI = 'Deccan Fencing Club';

    const upiLink  = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(nameUPI)}&am=${amount}&cu=INR`;
    const qrImage  = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;

    // ─── EMAIL TO USER ───
    try {
      await transporter.sendMail({
        from:    EMAIL_USER,
        to:      email,
        subject: 'Registration Received – Deccan Open 2026',
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #07080A; color: #F5F0E8; padding: 2rem;">
            <h2 style="color: #C9A84C; font-size: 1.6rem;">Hi ${name},</h2>
            <p>Your registration for <strong>Deccan Open Fencing 2026</strong> has been received.</p>

            <table style="width:100%; margin: 1.5rem 0; border-collapse: collapse;">
              <tr><td style="padding: 0.4rem 0; color: #C9A84C; width: 140px;">Category</td><td>${category}</td></tr>
              <tr><td style="padding: 0.4rem 0; color: #C9A84C;">Weapon</td><td>${weapon}</td></tr>
              <tr><td style="padding: 0.4rem 0; color: #C9A84C;">Club</td><td>${club || '—'}</td></tr>
            </table>

            <hr style="border-color: rgba(201,168,76,.3); margin: 1.5rem 0;" />

            <h3 style="color: #C9A84C;">Complete Your Payment</h3>
            <p>Scan the QR code below to pay <strong>₹1,000</strong> via UPI:</p>
            <img src="${qrImage}" width="200" alt="UPI QR Code" style="display:block; margin: 1rem 0; border: 1px solid rgba(201,168,76,.3);" />
            <p><strong>UPI ID:</strong> ${upiId}</p>
            <p><strong>Amount:</strong> ₹1,000</p>
            <p>Your slot will be confirmed after payment verification. Keep your payment screenshot for reference.</p>

            <hr style="border-color: rgba(201,168,76,.3); margin: 1.5rem 0;" />
            <p style="font-size: 0.85rem; color: rgba(245,240,232,.5);">
              ⚔ Deccan Fencing Club · Hyderabad
            </p>
          </div>
        `,
      });
    } catch (mailErr) {
      console.error('User email error:', mailErr);
      // Don't block the whole request if user email fails — log and continue
    }

    // ─── EMAIL TO ADMIN ───
    try {
      await transporter.sendMail({
        from:    EMAIL_USER,
        to:      ADMIN_EMAIL,
        subject: `New Registration – ${name} (${category} ${weapon})`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px;">
            <h2 style="color: #C9A84C;">New Registration – Deccan Open 2026</h2>

            <h3>Participant Details</h3>
            <table style="width:100%; border-collapse: collapse;">
              <tr><td style="padding: 0.4rem; font-weight: bold; width: 160px;">Name</td><td>${name}</td></tr>
              <tr><td style="padding: 0.4rem; font-weight: bold;">Parent / Guardian</td><td>${parentName}</td></tr>
              <tr><td style="padding: 0.4rem; font-weight: bold;">Email</td><td>${email}</td></tr>
              <tr><td style="padding: 0.4rem; font-weight: bold;">Phone</td><td>${phone}</td></tr>
              <tr><td style="padding: 0.4rem; font-weight: bold;">Date of Birth</td><td>${dob}</td></tr>
            </table>

            <h3>Competition Details</h3>
            <table style="width:100%; border-collapse: collapse;">
              <tr><td style="padding: 0.4rem; font-weight: bold; width: 160px;">Category</td><td>${category}</td></tr>
              <tr><td style="padding: 0.4rem; font-weight: bold;">Weapon</td><td>${weapon}</td></tr>
              <tr><td style="padding: 0.4rem; font-weight: bold;">Club / Academy</td><td>${club || '—'}</td></tr>
              <tr><td style="padding: 0.4rem; font-weight: bold;">Hand</td><td>${tshirt || '—'}</td></tr>
            </table>

            <h3>Address</h3>
            <p>
              ${street1}${street2 ? ', ' + street2 : ''}<br/>
              ${city}, ${state} – ${pin}<br/>
              ${country}
            </p>

            ${notes ? `<h3>Notes</h3><p>${notes}</p>` : ''}

            <h3>Documents</h3>
            <p><strong>Aadhaar:</strong> ${aadhaarUrl ? `<a href="${aadhaarUrl}">View Document</a>` : 'Not uploaded'}</p>

            <hr />
            <p style="font-size: 0.8rem; color: #888;">
              Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
            </p>
          </div>
        `,
      });
    } catch (adminMailErr) {
      console.error('Admin email error:', adminMailErr);
      // Don't fail the request if admin email fails
    }

    // ─── RESPONSE ───
    return NextResponse.json({
      success: true,
      message: 'Registration submitted successfully',
      qr:      qrImage,
      upiLink,
    });

  } catch (err) {
    console.error('Registration Error:', err);
    return NextResponse.json(
      { success: false, message: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}