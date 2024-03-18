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
      `${process.env.API_URI}${path}&apiKey=${process.env.API_KEY}`
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
