const router = require('express').Router()
const nodemailer = require('nodemailer')

const createTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

router.post('/', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  try {
    const transporter = createTransporter()
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name} — Portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h3 style="margin:0 0 8px">New portfolio message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
        <p style="white-space:pre-wrap">${message}</p>
      `,
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Mail error:', err.message)
    res.status(500).json({ error: 'Failed to send message. Try again later.' })
  }
})

module.exports = router
