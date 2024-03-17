import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const path = request.nextUrl.search.split("?path=")[1];

    if (!path) {
      return NextResponse.json(
        { message: "Path is required" },
        { status: 400 }
      );
    }

    const response = await axios.get(
      `https://api.spoonacular.com/recipes${path}&apiKey=dfc24af160234e84b4f9808f7a0fa988`
    );

    const data = response.data;

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Something went wrong, please try again later." },
      { status: 500 }
    );
  }
}
