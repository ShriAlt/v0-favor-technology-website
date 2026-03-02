// app/api/contact/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, phone, email, service, message } = await req.json()

  try {
    // Configure transporter (using Gmail SMTP here)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your Gmail address
        pass: process.env.MAIL_PASS, // Gmail App Password
      },
    })

    // Send mail
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: "contact.sales@favorad.in", // recipient
      subject: `New Contact Form Submission - ${service}`,
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Service: ${service}
        Message: ${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}
