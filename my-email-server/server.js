require('dotenv').config();
const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middlewares
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON data

// Email endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const msg = {
    to: 'manssourmohamed832@gmail.com', // Receiver email address
    from: 'manssourmohamed@gmail.com' , // Verified Sender
    subject: `Message from ${name}: ${subject}`,
    text: `Sender: ${email}\n\n${message}`,
};


  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
    res.status(200).send('Email successfully sent');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



