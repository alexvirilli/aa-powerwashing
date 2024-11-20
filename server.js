// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5001;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// // Routes
// app.post('/api/contact', (req, res) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL_USER,
//     subject: `Contact form submission from ${name}`,
//     text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
//     } else {
//       console.log('Email sent: ' + info.response);
//       return res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
