import { connect } from "@/app/shared/config/dbConfig";
import { User } from "@/app/shared/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const searchParams = new URLSearchParams(request.nextUrl.search);
    const email = searchParams.get("email");

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "Favorite recipe succesfully removed!",
        recipes: user.recipes,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error removing recipe" },
      { status: 500 }
    );
  }
}
