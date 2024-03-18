import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const path = decodeURIComponent(request.nextUrl.search.split("?path=")[1]);

    if (!path) {
      return NextResponse.json(
        { message: "Path is required" },
        { status: 400 }
      );
    }

    const response = await axios.get(
      `${process.env.API_URI}${path}&apiKey=${process.env.API_KEY}`
    );

    const data = response.data;

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 }
    );
  }
}
