const express = require('express');
const sendGrid = require('@sendgrid/mail');
const router = express.Router();

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate the request body
  if (!name || !email || !message) {
    res.status(400).json({ success: false, error: 'All fields are required' });
    return;
  }

  const msg = {
    to: process.env.RECEIVING_EMAIL,
    from: process.env.SENDER_EMAIL,
    subject: `Contact Form Submission from ${name}`,
    text: message,
  };

  try {
    await sendGrid.send(msg);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).json({ success: false, error: 'Error sending email' });
  }
});

module.exports = router;
