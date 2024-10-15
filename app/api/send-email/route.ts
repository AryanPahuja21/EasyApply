import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { session, recipients, subject, message } = await req.json();

  console.log({ session, recipients, subject, message });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: session.refreshToken,
      accessToken: session.accessToken,
    },
  });

  const fromEmail = session.user.email ?? "default@example.com";

  const mailOptions = {
    from: fromEmail,
    to: recipients.join(", "),
    subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
