import { NextResponse } from "next/server";
import { fetchCareers } from "@/app/lib/careers";

export async function GET() {
  try {
    const data = await fetchCareers();
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json(
      { data: [], error: "Failed to fetch careers" },
      { status: 502 },
    );
  }
}
