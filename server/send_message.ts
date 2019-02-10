import { Request, Response } from 'express'
import * as nodemailer from 'nodemailer'
import * as SMTPTransport from 'nodemailer-smtp-transport'

export const sendMessage = async (req: Request, res: Response) => {
  const { email, message, name } = req.body
  let account = process.env.EMAIL_PASSWORD
    ? {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
      }
    : await nodemailer.createTestAccount()

  const options: SMTPTransport.SmtpOptions = {
    host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: Number(process.env.EMAIL_PORT) === 465,
    auth: account
  }

  const transporter = nodemailer.createTransport(options)

  const mail = {
    from: email,
    to: process.env.EMAIL_ADDRESS || 'test@test.com',
    subject: `${name} Contacting via Website`,
    text: message
  }

  await transporter.sendMail(mail)

  res.send('Got your message. I will reply soon!')
}
