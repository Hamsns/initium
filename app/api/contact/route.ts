import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const API_KEY = process.env.BREVO_API_KEY;
    if (!API_KEY) {
      return NextResponse.json({ error: "Missing BREVO_API_KEY" }, { status: 500 });
    }
    const payload = {
      sender: { email: "no-reply@initium.example" },
      to: [{ email: "you@example.com", name: "Initium Inbox" }],
      subject: `New contact form submission from ${name || "Anonymous"}`,
      htmlContent: `
        <h3>Contact form message</h3>
        <p><strong>Name:</strong> ${name || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "").toString().replace(/\n/g, "<br/>")}</p>
      `
    };
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error("Brevo error:", errText);
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
