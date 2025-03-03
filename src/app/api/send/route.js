import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    // Nodemailer Transporter (Update with your SMTP credentials)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "royyrounak10@gmail.com", // Update with your email
        pass: "rpuu csfl defc mmtr", // Use an App Password if using Gmail
      },
    });

    const mailOptions = {
      from: email,
      to: "royyrounak10@gmail.com", // Your recipient email
      subject: subject,
      text: message,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Error sending email" }, { status: 500 });
  }
}
