import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { session, recipients, subject, message } = await req.json();

  console.log({ session, recipients, subject, message });
  console.log(session.data.user);
  console.log(session.data.accessToken);
  console.log(session.data.refreshToken);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      type: "OAuth2",
      user: session.data.user.email,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: session.data.refreshToken,
      accessToken: session.data.accessToken,
    },
  });

  const fromEmail = session.data.user.email;

  console.log({ fromEmail });

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
