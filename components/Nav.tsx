"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#research", label: "Research & Scripts" },
  { href: "#editing", label: "Editing" },
  { href: "#fashion", label: "AI Fashion" },
  { href: "#workflow", label: "Workflow" },
  { href: "#services", label: "Services" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-site items-center justify-between px-5 md:px-10" aria-label="Main">
        <a href="#top" className="font-serif text-2xl">{profile.name}</a>
        <ul className="hidden items-center gap-8 text-sm text-mute lg:flex">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="transition hover:text-bone">{l.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary hidden !py-2 lg:inline-flex">Let&apos;s Work Together</a>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-line bg-ink px-5 py-4 lg:hidden">
          {[...links, { href: "#contact", label: "Contact" }].map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-lg">{l.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
