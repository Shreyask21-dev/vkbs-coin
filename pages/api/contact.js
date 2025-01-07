export default function handler(req, res) 
{ 
    console.log("testing", req);
    require('dotenv').config()
  
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 587,
        secure: false, // true for 465, false for other ports
        host: "",
        tls: {
          rejectUnauthorized: false, // Allow self-signed certificates
      },
        auth: {
            user:"",
            pass: '',
        },
    })
 

    const mailData = {
        from: `VKBS Enquiry <${req.body.email}>`,
        to: `, ${req.body.email}`,
        subject: `Enquiry From - ${req.body.firstName}`,
        text: req.body.firstName+ " | Sent from: " + req.body.email,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2 style="color: #2e6c80;">New Enquiry from VKBS</h2>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr style="background-color: #f2f2f2;">
                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Field</th>
                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Details</th>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Name</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${req.body.firstName} ${req.body.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Email</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${req.body.email}</td>
              </tr>
              <tr style="background-color: #f2f2f2;">
                <td style="padding: 10px; border: 1px solid #ddd;">Phone Number</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${req.body.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Company</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${req.body.company}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Message</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${req.body.message}</td>
              </tr>
            </table>
          </div>
        `
      };
      
     
 
    transporter.sendMail(mailData, function (err, info) 
    {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
    return res.status(200).json({
        success: true
    });
}