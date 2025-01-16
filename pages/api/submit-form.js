// pages/api/submit-form.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {

    console.log(req.body)
    
    require('dotenv').config();

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { firstName, lastName, email, phone, country, city, pinCode, address, location, experience } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: "email@vkbs.in", // Your email
            pass:process.env.password
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOptions = {
        from: 'VKBS Careers Enquiry <infoblr@vkbs.in>',
        to: 'careers@vkbs.in',
        subject: 'New Careers Enquiry from VKBS',
        html: `
            <h2>New Careers Enquiry from VKBS</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Pin Code:</strong> ${pinCode}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Experience:</strong> ${experience}</p>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully', info: info.response });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error sending email', error: error.message });
    }
}
