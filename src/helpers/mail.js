import nodemailer from 'nodemailer';
import 'dotenv/config';


const sendMail = async (userEmail, subject, html) => {
  try {
      const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: process.env.EMAIL, 
              pass: process.env.PASSCODE,
          },
      });

      const mailOptions = {
        //   from: from,
        //   to: process.env.EMAIL,  
          from: process.env.EMAIL,       
          to: process.env.EMAIL,         
          replyTo: userEmail,            
          subject: subject,
          html: html,  
      };

      const info = await transporter.sendMail(mailOptions);
      return info.messageId;
  } catch (err) {
      console.error('Error sending email:', err);
      return 'Message not sent';
  }
};

export default sendMail;