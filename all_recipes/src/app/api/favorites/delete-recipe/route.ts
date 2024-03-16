import { FavoriteRecipeType } from "@/app/features/recipes/types";
import { connect } from "@/app/shared/config/dbConfig";
import { User } from "@/app/shared/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = new URLSearchParams(request.nextUrl.search);
    const recipeId = Number(searchParams.get("recipeId"));
    const email = searchParams.get("email");

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const recipeIndex = user.recipes.findIndex(
      (recipe: FavoriteRecipeType) =>
        Number(recipe.recipeId) === Number(recipeId)
    );

    if (recipeIndex === -1) {
      return NextResponse.json(
        {
          message: "Recipe not found.",
        },
        { status: 404 }
      );
    }

    user.recipes.splice(recipeIndex, 1);
    await user.save();

    return NextResponse.json(
      { message: "Favorite recipe succesfully removed!", email, recipeId },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error removing recipe" },
      { status: 500 }
    );
  }
}
