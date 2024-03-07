import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "@/app/shared/models/userModel";
import bcryptjs from "bcryptjs";
import { checkPasswordRequirements } from "@/app/features/authentication/utils";

export async function PATCH(request: NextRequest) {
  try {
    const { token, newPassword } = await request.json();

    if (!token || !newPassword) {
      return NextResponse.json(
        { message: "Token and password are required" },
        { status: 400 }
      );
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!);

    if (!decodedToken) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 401 }
      );
    }

    const { userId, email } = decodedToken as JwtPayload;

    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (user.email !== email) {
      return NextResponse.json(
        { message: "Token email does not match user's email" },
        { status: 400 }
      );
    }

    if (!checkPasswordRequirements(newPassword)) {
      return NextResponse.json(
        {
          error:
            "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.",
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcryptjs.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    return NextResponse.json(
      { message: "Password updated succesfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error during (reset-password)" },
      { status: 500 }
    );
  }
}
