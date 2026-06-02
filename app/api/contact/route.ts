import { NextResponse } from "next/server";

/** Strapi collection API ID — pluralName from Contact content-type */
const DEFAULT_STRAPI_CONTACT_ENDPOINT = "contacts";

/** contactStatus enum values in Strapi Contact collection */
type ContactStatus =
  | "new"
  | "inProgress"
  | "Contacted"
  | "FollowUp"
  | "closed";

export async function POST(request: Request) {
  let body: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    recaptchaToken?: string;
    recaptchaAction?: string;
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
  const recaptchaToken = body.recaptchaToken?.trim();
  const recaptchaAction = body.recaptchaAction?.trim() || "contact_submit";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  if (recaptchaSecret) {
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "Security verification missing. Please refresh and try again." },
        { status: 400 },
      );
    }

    try {
      const verifyResponse = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: recaptchaSecret,
            response: recaptchaToken,
          }),
        },
      );

      const verifyData = (await verifyResponse.json()) as {
        success?: boolean;
        score?: number;
        action?: string;
      };

      const score = verifyData.score ?? 0;
      if (
        !verifyData.success ||
        verifyData.action !== recaptchaAction ||
        score < 0.5
      ) {
        return NextResponse.json(
          { error: "Security verification failed. Please try again." },
          { status: 400 },
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Unable to verify request security. Please try again." },
        { status: 502 },
      );
    }
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const endpoint =
    process.env.STRAPI_CONTACT_ENDPOINT?.trim() || DEFAULT_STRAPI_CONTACT_ENDPOINT;

  const payload = {
    data: {
      name,
      email,
      subject,
      message,
      contactStatus: "new" satisfies ContactStatus,
    },
  };

  if (apiUrl) {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (process.env.STRAPI_API_TOKEN) {
      headers.Authorization = `Bearer ${process.env.STRAPI_API_TOKEN}`;
    }

    const strapiUrl = `${apiUrl}/${endpoint}?status=published`;

    try {
      const res = await fetch(strapiUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        return NextResponse.json({ ok: true });
      }

      let strapiMessage: string | undefined;
      try {
        const errJson = await res.json();
        strapiMessage =
          errJson?.error?.message ||
          errJson?.error?.details?.errors?.[0]?.message;
      } catch {
        /* ignore parse errors */
      }

      return NextResponse.json(
        {
          error:
            strapiMessage ||
            "Message could not be saved right now. Please contact support if this continues.",
          details:
            process.env.NODE_ENV === "development"
              ? { endpoint, status: res.status, strapiMessage }
              : undefined,
        },
        { status: 502 },
      );
    } catch {
      return NextResponse.json(
        {
          error:
            "Message could not be saved right now. Please contact support if this continues.",
        },
        { status: 502 },
      );
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
    `[Floyet] ${subject}`,
  )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

  return NextResponse.json({ ok: true, mailto, fallback: true });
}
