import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

const contactSchema = z.object({
  name: z.string().min(2, 'Nama harus lebih dari 2 karakter'),
  email: z.string().email('Format email tidak valid'),
  phone: z.string().optional(),
  service: z.string(),
  message: z.string().min(10, 'Pesan harus lebih dari 10 karakter'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedBody = contactSchema.safeParse(body);

    if (!parsedBody.success) {
      const errors = parsedBody.error.flatten().fieldErrors;
      return NextResponse.json({ message: 'Input tidak valid', errors }, { status: 400 });
    }

    const { name, email, phone, service, message } = parsedBody.data;
    const sanitizedMessage = DOMPurify.sanitize(message);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_SERVER_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Pesan Kontak Baru dari ${name} - Layanan ${service}`,
      html: `
        <h2>Pesan Kontak Baru dari Website U2CleanPro</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telepon:</strong> ${phone || 'Tidak diisi'}</p>
        <p><strong>Jenis Layanan:</strong> ${service}</p>
        <hr />
        <h3>Pesan:</h3>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Pesan Anda telah berhasil terkirim!' }, { status: 200 });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan saat mengirim pesan.' }, { status: 500 });
  }
}
