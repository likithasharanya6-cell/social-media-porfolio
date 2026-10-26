import { Clapperboard, Search, Sparkles } from "lucide-react";
import { services } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const icons = [Search, Clapperboard, Sparkles];

export default function Services() {
  return (
    <section id="services" className="border-t border-line bg-coal/40 py-24 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-10">
        <SectionHeading eyebrow="06 — Services" title="How I Can Help." />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <article key={s.title} className="reveal group rounded-3xl border border-line bg-ink p-8 transition hover:-translate-y-1 hover:border-accent/50">
                <Icon className="h-7 w-7 text-accent" aria-hidden />
                <h3 className="mt-8 font-serif text-3xl leading-tight">{s.title}</h3>
                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {s.items.map((it) => (
                    <li key={it} className="text-sm text-mute">{it}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
