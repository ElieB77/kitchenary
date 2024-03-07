import { User } from "@/app/shared/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { transporter } from "@/app/shared/config/mailConfig";
import { handleMailOptions } from "@/app/features/authentication/utils";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (user.isVerified) {
      return NextResponse.json(
        { message: "User already verified" },
        { status: 409 }
      );
    }

    const token = jwt.sign(
      { userId: user?._id, email },
      process.env.JWT_SECRET!,
      {
        expiresIn: "30m",
      }
    );

    const resetLink = `http://localhost:3000/signup/verify?token=${token}`;
    const emailSubject = "Activate my account";
    const emailBody =
      "Someone has created a Kitchenary account with this email address. If this was you, click the link below to verify your email address.";

    transporter.sendMail(
      handleMailOptions(email, resetLink, emailSubject, emailBody),
      (error, info) => {
        if (error) {
          throw { message: "Error sending email", error };
        } else {
          throw { message: "Email sent:", info };
        }
      }
    );

    return NextResponse.json(
      { message: "Email succesfully sent!", email },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error during (resend-link)" },
      { status: 500 }
    );
  }
}
