import nodemailer from 'nodemailer';
import 'dotenv/config';

const sendMail = async (from, subject, data, cc, attachments) => {
  try {
   
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSCODE,
      },
    });

    const mailOptions = {
      from: from,
      to: process.env.EMAIL, 
      subject: subject,
      message: message
    
    };

    const info = await transporter.sendMail(mailOptions);

    return info.messageId;
  } catch (err) {
    console.error('Error sending email:', err);
    return 'Message not sent'; // Return a failure message
  }
};

export default sendMail;
