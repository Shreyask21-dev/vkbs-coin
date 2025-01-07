// pages/api/submit-form.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    require('dotenv').config();

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { firstName, lastName, email, phone, country, city, pinCode, address } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: "vatsalyasagar8@gmail.com", // Your email
            pass: "snbx ljdp zzst gbsk", // Your email password or app password
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOptions = {
        from: 'VKBS Enquiry <infoblr@vkbs.in>',
        to: 'careers@vkbs.in',
        subject: 'New Enquiry from VKBS',
        html: `
            <h2>New Enquiry from VKBS</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Pin Code:</strong> ${pinCode}</p>
            <p><strong>Address:</strong> ${address}</p>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully', info: info.response });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error sending email', error: error.message });
    }
}
