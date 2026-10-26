import { Check } from "lucide-react";
import { editingProjects } from "@/data/portfolio";
import CompareSlider from "./CompareSlider";
import SectionHeading from "./SectionHeading";
import VideoPlayer from "./VideoPlayer";

export default function EditingShowcase() {
  return (
    <section id="editing" className="border-t border-line bg-coal/40 py-24 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-10">
        <SectionHeading
          eyebrow="02 — AI-Assisted Video Editing"
          title="Raw Footage In. Refined Content Out."
          intro="Claude is part of my editing workflow as a creative collaborator — helping me plan edits, structure the story, tune pacing, sharpen hooks and write captions. I do the cutting and finishing in my editing software; Claude helps me decide what to change and why."
        />

        <div className="space-y-24">
          {editingProjects.map((p, i) => (
            <article key={p.before.expected} className="reveal grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="eyebrow">Project {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-serif text-4xl">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-mute">{p.description}</p>
                <ul className="mt-6 space-y-2">
                  {p.improvements.map((imp) => (
                    <li key={imp} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-accent" aria-hidden />{imp}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  {(["before", "after"] as const).map((k) => (
                    <div key={k}>
                      <span className={`mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-semibold tracking-widest ${k === "after" ? "bg-accent text-ink" : "border border-line text-mute"}`}>
                        {k.toUpperCase()}
                      </span>
                      <VideoPlayer video={p[k]} label={`${p.title} — ${k}`} />
                    </div>
                  ))}
                </div>
                {p.before.poster && p.after.poster && (
                  <div className="mt-6">
                    <p className="mb-3 text-xs text-mute">Drag to compare frames</p>
                    <CompareSlider before={p.before.poster} after={p.after.poster} />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
