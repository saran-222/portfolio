import { NextRequest, NextResponse } from "next/server";
import ejs from 'ejs'
import 'dotenv/config'
import * as path from 'path'
import sendMail from "../../../helpers/mail"


const __dirname = path.resolve();


export async function POST(NextRequest) {
  const reqBody = await NextRequest.json()
    const { email, subject, message} = reqBody
  try {
      let html = await ejs.renderFile(__dirname + "/contact.ejs", {
          subject: subject,
          message: message,
      });
      let result = await sendMail(email, subject, html);
      return NextResponse.json({ result: result }, { status: 201 });
  } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


// -----------------------



// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, email],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }






