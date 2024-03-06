import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { User } from "@/app/shared/models/userModel";
import { connect } from "@/app/shared/config/dbConfig";
import {
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

    if (!checkPasswordRequirements(password)) {
      return NextResponse.json(
        {
          error:
            "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number, and must be distinct from your email address.",
        },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          error: "Email already in use. Please choose another.",
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
    const resetLink = `http://localhost:3000/signup/verify?token=${token}`;

    const emailSubject = "Activate my account";

    transporter.sendMail(
      handleMailOptions(email, resetLink, emailSubject),
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
      {
        message: "User successfully created",
        user,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "There was an error during registration",
        error: error.message,
      },
      { status: 500 }
    );
  }
}