import { NextResponse } from "next/server";

const STRAPI_ENDPOINTS = [
  "contact-submissions",
  "contact-messages",
  "contacts",
  "contact-inquiries",
];

export async function POST(request: Request) {
  let body: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const subject = body.subject?.trim() || "Website contact";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const payload = {
    data: {
      name,
      email,
      subject,
      message,
      source: "floyet-website",
    },
  };

  if (apiUrl) {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (process.env.STRAPI_API_TOKEN) {
      headers.Authorization = `Bearer ${process.env.STRAPI_API_TOKEN}`;
    }

    for (const endpoint of STRAPI_ENDPOINTS) {
      try {
        const res = await fetch(`${apiUrl}/${endpoint}`, {
          method: "POST",
          headers,
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          return NextResponse.json({ ok: true });
        }
      } catch {
        /* try next endpoint */
      }
    }
  }

  if (process.env.CONTACT_WEBHOOK_URL) {
    try {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      return NextResponse.json({ ok: true });
    } catch {
      /* fall through */
    }
  }

  const mailto = `mailto:info@floyet.com?subject=${encodeURIComponent(
    `[Floyet] ${subject}`
  )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

  return NextResponse.json({ ok: true, mailto, fallback: true });
}
