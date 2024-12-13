// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL

// export async function POST(req,res) {
//     const { email, subject, message } = await req.json();
//   try {
//     const { data, error } = await resend.emails.send({
//       from: fromEmail,
//       to: email,
//       subject: subject,
//       react: 
//       <>
//         <h1>{subject}</h1>
//         <p>Thank you for contacting us !</p>
//         <p>New message Submitted:</p>
//         <p>{message}</p>
//       </>
//     });
//     if (error) {
//         return res.status(500).json({ error: error.message });
//     }
//     return res.status(200).json({ success: true, data });
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }

// ------------------

import ejs from 'ejs'
import 'dotenv/config'
import * as path from 'path'
import sendMail from "../../../helpers/mail"


const __dirname = path.resolve();





export async function POST(req,res) {
    const { email, subject, message } = await req.json();
  try {
    let html = await ejs.renderFile(__dirname + "/contact.ejs", {
        subject: subject,
        message: message,
       
    })

    let result = await sendMail(email, subject,message, html);
    return res.status(201).send({ result: result });  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

