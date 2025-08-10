"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message")
        })
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      (document.getElementById("contact-form") as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold tracking-tight">Contact us</h1>
      <p className="mt-3 text-slate-600">
        We usually reply within 2–3 business days.
      </p>
      <form
        id="contact-form"
        action={onSubmit}
        className="mt-8 space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            required
            rows={6}
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-brand-blue text-white font-medium"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
        {status !== "idle" && (
          <div
            className={`text-sm mt-2 ${
              status === "success"
                ? "text-green-700"
                : status === "error"
                ? "text-red-600"
                : "text-slate-600"
            }`}
          >
            {status === "success"
              ? "Thanks! We’ll get back to you."
              : status === "error"
              ? "Something went wrong. Please try again."
              : ""}
          </div>
        )}
      </form>
    </section>
  );
}
