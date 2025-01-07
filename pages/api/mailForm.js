// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {

    require('dotenv').config()
    // Ensure the request method is POST
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { to, subject, text, html } = req.body;

    // Create a transporter object using the SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'vatsalyasagar8@gmail.com', // Your Outlook email address
            pass: 'snbx ljdp zzst gbsk', // 
        },
        tls: {
            rejectUnauthorized: false, // Allow self-signed certificates
        },
    });

    // Set up email data
    const mailOptions = {
        
        from: `VKBS Enquiry infoblr@vkbs.in`,
        to: 'infoblr@vkbs.in', // List of receivers
        subject: "New Enqiry From vkbs.in", // Subject line
        text: text, // Plain text bodPrasad.a@coinage.in
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #2e6c80;">New Enquiry from VKBS</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f2f2f2;">
              <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Field</th>
              <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Details</th>
            </tr>
            <tr style="background-color: #fff;">
              <td style="padding: 10px; border: 1px solid #ddd;">Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${req.body.firstName} ${req.body.lastName}</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
              <td style="padding: 10px; border: 1px solid #ddd;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${req.body.email}</td>
            </tr>
            <tr style="background-color: #fff;">
              <td style="padding: 10px; border: 1px solid #ddd;">Phone Number</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${req.body.phone}</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
              <td style="padding: 10px; border: 1px solid #ddd;">Company</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${req.body.company}</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
              <td style="padding: 10px; border: 1px solid #ddd;">Message</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${req.body.description}</td>
            </tr>
          </table>
        </div>
      `
    };

    try {
        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);

        // Respond to the client
        return res.status(200).json({
            success: true,
            message: 'Email sent successfully',
            info: info.response,
        });
    } catch (error) {
        console.error('Error sending email:', error);

        // Handle errors and respond to the client
        return res.status(500).json({
            success: false,
            message: 'Error sending email',
            error: error.message,
        });
    }
}