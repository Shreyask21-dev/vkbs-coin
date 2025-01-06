import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Create a transporter
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // Use your email service
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email password or app-specific password
        },
      });

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'recipient@example.com', // Replace with the recipient's email
        subject: 'New Form Submission',
        text: `You have a new form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email.', error: error.toString() });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
