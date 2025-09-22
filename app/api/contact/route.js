import { NextResponse } from 'next/server'
import { sendContactEmail, verifyMailTransport } from '@/lib/mail'

export async function POST(request) {
  try {
    const body = await request.json()
    const url = new URL(request.url)
    const debug = url.searchParams.get('debug') === '1'
    const { name, email, contact, description, message } = body || {}

    // Backward compatibility: some pages might use `message` instead of `description`
    const desc = typeof description === 'string' && description.trim().length > 0
      ? description
      : (typeof message === 'string' ? message : '')

    if (!name || !email || !desc) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email format' }, { status: 400 })
    }

    const result = await sendContactEmail({ name: name.trim(), email: email.trim(), contact: contact?.trim?.(), description: desc.trim() })

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error || 'Failed to send email' }, { status: 502 })
    }

    // In debug mode, return limited diagnostics to aid troubleshooting
    if (debug) {
      const { messageId, accepted, rejected, response } = result
      return NextResponse.json({ success: true, message: 'Email sent successfully', messageId, accepted, rejected, response })
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const res = await verifyMailTransport()
    if (!res.success) {
      return NextResponse.json({ success: false, error: res.error }, { status: 502 })
    }
    return NextResponse.json({ success: true, info: res.info })
  } catch (error) {
    console.error('Contact verify API error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
