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
      `https://api.spoonacular.com/recipes${path}&apiKey=63997e14bebe4b10b3864437f1f4b758`,
      {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );

    if (!response) {
      return NextResponse.json(
        { message: "Error fetching api" },
        { status: 404 }
      );
    }

    const data = response.data;

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    if (error.response) {
      const { status, data } = error.response;
      return NextResponse.json(
        { success: false, message: data.error || "Something went wrong" },
        { status }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong, please try again later.",
        },
        { status: 500 }
      );
    }
  }
}
