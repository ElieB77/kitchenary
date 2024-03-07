import { connect } from "@/app/shared/config/dbConfig";
import { User } from "@/app/shared/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const { verifToken } = await request.json();

    if (!verifToken) {
      return NextResponse.json(
        { message: "Verification token is missing" },
        { status: 400 }
      );
    }

    const user = await User.findOne({
      verificationToken: verifToken,
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid verification token" },
        { status: 400 }
      );
    }

    if (user.isVerified) {
      return NextResponse.json(
        { message: "User is already verified" },
        { status: 409 }
      );
    }

    user.isVerified = true;
    await user.save();

    return NextResponse.json(
      { message: "Email verified succesfully!", token: verifToken },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error during verification" },
      { status: 500 }
    );
  }
}
