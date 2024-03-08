import { connect } from "@/app/shared/config/dbConfig";
import { User } from "@/app/shared/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const { email, recipeId, title } = await request.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const alreadyExist = user.recipes.find(
      (recipe: any) => recipe.recipeId === recipeId
    );

    if (alreadyExist) {
      return NextResponse.json(
        { message: "This recipe is already in your favorites" },
        { status: 409 }
      );
    }

    user.recipes.push({ recipeId: recipeId, title: title });
    await user.save();

    return NextResponse.json(
      { message: "Favorite recipe succesfully added!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding recipe" },
      { status: 500 }
    );
  }
}
