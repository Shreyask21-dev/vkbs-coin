// pages/api/submit-form.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {

    console.log(req.body)

    require('dotenv').config();

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { firstName, lastName, email, phone, country, city, pinCode, address, location, experience, role } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: "email@vkbs.in", // Your email
            pass: process.env.password
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOptions = {
        from: 'VKBS Careers Enquiry <infoblr@vkbs.in>',
        to: 'shreyas.k@coinage.in',
        // to: 'careers@vkbs.in',
        subject: 'New Job Enquiry from VKBS Website',
        html: `
        <div>New Job Enquiry for role <strong>${role} </strong> at location <strong>${location}</strong> with experience between <strong>${experience}</strong> years </div>
        <table style="border-collapse: collapse; width: 100%; margin-top: 20px;">
            <tr>
                <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Field</th>
                <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Details</th>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Country</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${country}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>City</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${city}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Pin Code</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${pinCode}</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Address</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${address}</td>
            </tr>
        </table>
    `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully', info: info.response });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Error sending email', error: error.message });
    }
}
