"use client";
import { useState, type FormEvent } from "react";
import { Instagram, Linkedin, Mail, Send } from "lucide-react";
import { profile, projectTypes } from "@/data/portfolio";

/**
 * INTEGRATION POINT: set NEXT_PUBLIC_FORM_ENDPOINT in .env.local
 * (e.g. a Formspree/Getform URL or your own API route). The form POSTs JSON there.
 * Without it, the form is shown but submission is disabled — no fake "success".
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ENDPOINT) return;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  const field = "w-full rounded-xl border border-line bg-ink px-4 py-3 text-bone placeholder:text-mute/60 focus:border-accent focus:outline-none";
  const channels = [
    { icon: Mail, label: profile.email || "Email — add in data/portfolio.ts", href: profile.email ? `mailto:${profile.email}` : "" },
    { icon: Instagram, label: profile.instagramHandle, href: profile.instagramUrl },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedinUrl },
  ];

  return (
    <section id="contact" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-site gap-16 px-5 md:px-10 lg:grid-cols-2">
        <div className="reveal">
          <p className="eyebrow mb-5">07 — Contact</p>
          <h2 className="font-serif text-5xl leading-[1.02] md:text-7xl">Have an Idea? Let&apos;s Turn It Into Content.</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-mute">
            I&apos;m open to collaborating with brands, creators, and agencies looking for creative social media content, engaging video scripts, thoughtful content strategies, and AI-powered fashion videos.
          </p>
          <ul className="mt-10 space-y-4">
            {channels.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-accent" aria-hidden />
                {href ? (
                  <a href={href} className="underline-offset-4 hover:underline" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{label}</a>
                ) : (
                  <span className="text-mute">{label} <span className="text-xs">(link not set)</span></span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="reveal space-y-5 rounded-3xl border border-line bg-coal p-6 md:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">Name<input name="name" required autoComplete="name" className={`${field} mt-2`} /></label>
            <label className="block text-sm">Email<input name="email" type="email" required autoComplete="email" className={`${field} mt-2`} /></label>
          </div>
          <label className="block text-sm">Project type
            <select name="projectType" className={`${field} mt-2`} defaultValue={projectTypes[0]}>
              {projectTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label className="block text-sm">Message<textarea name="message" required rows={5} className={`${field} mt-2 resize-y`} /></label>
          <button type="submit" disabled={!ENDPOINT || status === "sending"} className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-50">
            {status === "sending" ? "Sending…" : "Start a Collaboration"} <Send className="h-4 w-4" aria-hidden />
          </button>
          <p className="text-sm text-mute" role="status" aria-live="polite">
            {!ENDPOINT && "Form not connected yet — please reach out via email or Instagram."}
            {status === "sent" && "Thanks! Your message was sent."}
            {status === "error" && "Something went wrong. Please try email instead."}
          </p>
        </form>
      </div>
    </section>
  );
}
