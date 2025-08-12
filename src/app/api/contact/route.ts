import { NextResponse } from 'next/server'
import { Resend } from 'resend'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json()

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 })
    }

    const from = process.env.CONTACT_FROM
    const to = process.env.CONTACT_TO
    const apiKey = process.env.RESEND_API_KEY
    if (!from || !to || !apiKey) {
      return NextResponse.json({ ok: false, error: 'Email service not configured' }, { status: 500 })
    }

    // Lazy-initialize Resend to avoid build-time evaluation
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from,
      to,
      subject: `SoraTech contact: ${firstName} ${lastName}`,
      text: `From: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone ?? ''}\n\n${message ?? ''}`,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}


