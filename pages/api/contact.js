import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      subject: `✨ Novo lead pelo site — ${name}`,
      text: `NOVO LEAD PELO SITE\n\n\nNome:\n${name}\n\n\nEmail:\n${email}\n\n\nMensagem:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; background: #f7f7f7;">
          <h2 style="color: #2b7a4b; margin-bottom: 24px;">✨ Novo contato pelo site</h2>

          <div style="background: #ffffff; border-radius: 8px; padding: 16px 20px; margin-bottom: 16px; border-left: 4px solid #2b7a4b;">
            <p style="margin: 0; font-size: 12px; text-transform: uppercase; color: #888;">Nome</p>
            <p style="margin: 4px 0 0; font-size: 16px; color: #222;">${name}</p>
          </div>

          <div style="background: #ffffff; border-radius: 8px; padding: 16px 20px; margin-bottom: 16px; border-left: 4px solid #2b7a4b;">
            <p style="margin: 0; font-size: 12px; text-transform: uppercase; color: #888;">Email</p>
            <p style="margin: 4px 0 0; font-size: 16px; color: #222;">${email}</p>
          </div>

          <div style="background: #ffffff; border-radius: 8px; padding: 16px 20px; border-left: 4px solid #2b7a4b;">
            <p style="margin: 0; font-size: 12px; text-transform: uppercase; color: #888;">Mensagem</p>
            <p style="margin: 4px 0 0; font-size: 16px; color: #222; white-space: pre-line;">${message}</p>
          </div>
        </div>
      `
    })

    return res.status(200).json({ ok: true, info })
  } catch (err) {
    console.error('Email error', err)
    return res.status(500).json({ error: 'Error sending email' })
  }
}
