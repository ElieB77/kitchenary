import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { User } from "@/app/shared/models/userModel";
import { connect } from "@/app/shared/config/dbConfig";
import {
  checkEmailFormat,
  checkPasswordRequirements,
  handleMailOptions,
} from "@/app/features/authentication/utils";
import jwt from "jsonwebtoken";
import { transporter } from "@/app/shared/config/mailConfig";

connect();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Email and password are required.",
        },
        { status: 400 }
      );
    }

    if (!checkEmailFormat(email)) {
      return NextResponse.json(
        {
          message: "Invalid email format. Please enter a valid email address.",
        },
        { status: 477 }
      );
    }

    if (!checkPasswordRequirements(password)) {
      return NextResponse.json(
        {
          message:
            "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.",
        },
        { status: 455 }
      );
    }

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          message: "Email already in use. Please choose another.",
        },
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

    const emailLink = `http://localhost:3000/auth/verify-email?token=${token}&email=${email}
    `;
    const emailSubject = "Activate my account";
    const emailBody =
      "Someone has created a Kitchenary account with this email address. If this was you, click the link below to verify your email address.";

    transporter.sendMail(
      handleMailOptions(email, emailLink, emailSubject, emailBody),
      (error, info) => {
        if (error) {
          throw { message: "Error sending email", error };
        } else {
          throw { message: "Email sent:", info };
        }
      }
    );

    const hash = await bcryptjs.hash(password, 10);

    await User.create({
      email,
      password: hash,
      verificationToken: token,
    });

    return NextResponse.json(
      { message: "User successfully created" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Something went wrong. Please try again later.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
