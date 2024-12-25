import { NextRequest, NextResponse } from "next/server";
import ejs from 'ejs'
import 'dotenv/config'
import * as path from 'path'
import sendMail from "../../../helpers/mail"

const __dirname = path.resolve();

export async function POST(NextRequest) {
  const reqBody = await NextRequest.json()
  const { email, subject, message } = reqBody
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

