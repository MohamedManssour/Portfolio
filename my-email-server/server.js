const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const app = express();


// Replace with your email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL, // Your Gmail address
      pass: process.env.EMAIL_PASSWORD, // Your Gmail password or App Password
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
});


// Middlewares
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON data


// Email endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;


  const mailOptions = {
    from: email, // sender address
    to: process.env.EMAIL, // receiver (your) email
    subject: `Message from ${name}: ${subject}`,
    text: `Sender: ${email}\n\n${message}`
  };


  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return res.status(200).send('Email successfully sent');
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).send('Error sending email');
  }
  });


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


