const nodemailer = require('nodemailer');
require('dotenv').config();

const sendContactMessage = async (req, res) => {
  const { name, email, message, location } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Get location info from request body or use defaults
    const { city = 'Unknown', state = 'Unknown', country = 'Unknown' } = location || {};
    
    // Set up transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New message from Kanpur Bhraman Contact Form`,
      text: `You have received a new message from your website:
            Name: ${name}
            Email: ${email}
            Location: ${city}, ${state}, ${country}
            Message:${message}`,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ message: 'Failed to send message.' });
  }
};

module.exports = { sendContactMessage };
