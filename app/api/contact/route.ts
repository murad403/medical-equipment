import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST (req: NextRequest) {
  try {
    const data = await req.json();
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS
      }
    })
    await transporter.sendMail({
      from: data?.email,
      to: process.env.NEXT_PUBLIC_SMTP_USER,
      subject: `Hello, I am ${data?.name}`,
      text: `${data?.message}. Contact for me ${data?.phone}`
    })
    return NextResponse.json(
      { message: 'Send message successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.log('contact page error', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
