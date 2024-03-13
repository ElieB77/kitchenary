import { handleMailOptions } from "@/app/features/authentication/utils";
import { transporter } from "@/app/shared/config/mailConfig";
import { User } from "@/app/shared/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connect } from "@/app/shared/config/dbConfig";

connect();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    const user = await User.findOne({ email });

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    if (!user) {
      return NextResponse.json(
        { message: "Oops! We couldn't find your email." },
        { status: 404 }
      );
    }

    const token = jwt.sign(
      { userId: user?._id, email },
      process.env.JWT_SECRET!,
      {
        expiresIn: "30m",
      }
    );

    const resetLink = `http://localhost:3000/auth/reset-password?token=${token}`;
    const emailSubject = "Reset password";
    const emailBody =
      "Someone just requested to change your Kitchenary password. If this was you, click on the link below to reset.";

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
      { message: "Email succesfully sent!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong. Please try again later.",
    });
  }
}
