import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Create a transporter
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // Use your email service (e.g., Gmail, Outlook, etc.)
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
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
