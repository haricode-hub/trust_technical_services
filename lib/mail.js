import nodemailer from 'nodemailer'

// Create a singleton transporter using SMTP credentials from environment variables
let transporter

function getTransporter() {
  if (transporter) return transporter

  const host = process.env.EMAIL_HOST
  const port = process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT, 10) : undefined
  const user = process.env.EMAIL_HOST_USER
  const pass = process.env.EMAIL_HOST_PASSWORD
  const useTLS = String(process.env.EMAIL_USE_TLS || '').toLowerCase() === 'true'

  if (!host || !port || !user || !pass) {
    throw new Error('SMTP configuration is incomplete. Please set EMAIL_HOST, EMAIL_PORT, EMAIL_HOST_USER, EMAIL_HOST_PASSWORD, EMAIL_USE_TLS in .env')
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports (STARTTLS on 587)
    auth: { user, pass },
    requireTLS: useTLS,
  })

  return transporter
}

/**
 * Sends a contact email to the configured mailbox
 * @param {{ name: string, email: string, contact?: string, description: string }} data
 */
export async function sendContactEmail(data) {
  const { name, email, contact, description } = data || {}

  if (!name || !email || !description) {
    throw new Error('Missing required fields: name, email, description')
  }

  const to = process.env.EMAIL_HOST_USER
  if (!to) {
    throw new Error('EMAIL_HOST_USER is not configured')
  }

  const mailSubject = 'New Contact Form Submission'

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    contact ? `Contact: ${contact}` : undefined,
    '',
    'Description:',
    description,
    '',
    '---',
    'Sent from Trust Technical Services website contact form',
  ].filter(Boolean)

  const textBody = lines.join('\n')

  const htmlBody = lines
    .map((line) => (line === '' ? '<br />' : `<div>${escapeHtml(line)}</div>`))
    .join('')

  const fromName = process.env.EMAIL_FROM_NAME || 'Trust Technical Services'
  const fromAddr = process.env.EMAIL_FROM || to
  const bcc = process.env.EMAIL_BCC
  const mailOptions = {
    from: `${fromName} <${fromAddr}>`, // send from our configured inbox with display name
    to,
    replyTo: email, // make it easy to reply to the submitter
    bcc: bcc || undefined,
    subject: mailSubject,
    text: textBody,
    html: htmlBody,
  }

  try {
    const tx = await getTransporter().sendMail(mailOptions)
    // Provide non-sensitive diagnostics that can help debug delivery
    const { messageId, accepted, rejected, response } = tx || {}
    return { success: true, messageId, accepted, rejected, response }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function verifyMailTransport() {
  try {
    const info = await getTransporter().verify()
    return { success: true, info }
  } catch (error) {
    console.error('SMTP verify error:', error)
    return { success: false, error: 'SMTP verification failed' }
  }
}
