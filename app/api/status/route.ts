import { NextResponse } from "next/server";

const DEFAULT_STATUS = {
  Website: true,
  GymTie: true,
  YoungMenu: true,
  DevaPatha: true,
  Livonomi: true,
  Onebest: true,
  cloud: true,
};

export async function GET() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    return NextResponse.json({ data: DEFAULT_STATUS });
  }

  try {
    const res = await fetch(`${apiUrl}/status`, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json({ data: DEFAULT_STATUS }, { status: 200 });
    }

    const json = await res.json();
    const data = json?.data ?? {};

    return NextResponse.json({
      data: {
        ...DEFAULT_STATUS,
        ...data,
      },
    });
  } catch {
    return NextResponse.json({ data: DEFAULT_STATUS }, { status: 200 });
  }
}

