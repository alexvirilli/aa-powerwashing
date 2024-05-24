const nodemailer = require('nodemailer');

export default async function (req, res) {
  console.log('GMAIL_USER:', process.env.GMAIL_USER);
  console.log('GMAIL_PASS:', process.env.GMAIL_PASS ? '***' : 'Not Set');
  console.log('RECEIVING_EMAIL:', process.env.RECEIVING_EMAIL);

  const { name, email, message } = req.body;

  // Validate the request body
  if (!name || !email || !message) {
    res.status(400).json({ success: false, error: 'All fields are required' });
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ success: false, error: 'Invalid email format' });
    return;
  }

  // Configure the SMTP transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECEIVING_EMAIL,
    subject: `Contact Form Submission from ${name}`,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).json({ success: false, error: 'Error sending email' });
  }
}
