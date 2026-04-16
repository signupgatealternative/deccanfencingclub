import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, phone, subject, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App password (NOT your Gmail password)
      },
    });

    await transporter.sendMail({
      from: `"Deccan Fencing Club" <${process.env.EMAIL_USER}>`,
      to: 'deccanfencingclub@gmail.com', // where you want to receive messages
      subject: `New Contact: ${subject}`,
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('EMAIL ERROR:', error);
    return NextResponse.json({ success: false, error });
  }
}