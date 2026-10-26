import { workflow } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

/** Vertical timeline on mobile, horizontal on large screens. */
export default function Workflow() {
  return (
    <section id="workflow" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-10">
        <SectionHeading eyebrow="05 — Workflow" title="From Idea to Published Content." />
        <ol className="relative grid gap-10 border-l border-line pl-8 lg:grid-cols-7 lg:gap-6 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-10">
          {workflow.map((s, i) => (
            <li key={s.title} className="reveal relative" style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-ink lg:-top-[47px] lg:left-0" aria-hidden />
              <span className="text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-serif text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
