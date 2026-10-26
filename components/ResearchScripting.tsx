import { researchGallery, researchSteps } from "@/data/portfolio";
import MediaImage from "./MediaImage";
import SectionHeading from "./SectionHeading";

export default function ResearchScripting() {
  return (
    <section id="research" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-10">
        <SectionHeading
          eyebrow="01 — Research & Scriptwriting with Claude"
          title="From Research to Viral-Ready Scripts."
          intro="I use Claude as a creative research and scripting partner: researching content opportunities, analyzing trends and audience interests, exploring topics, developing hooks, and writing scripts and strategies tailored to Instagram Reels. The creative judgment stays mine — Claude helps me go deeper and faster."
        />

        <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-5">
          {researchSteps.map((s, i) => (
            <li key={s.title} className="reveal bg-ink p-7 transition hover:bg-coal" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="font-serif text-4xl text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchGallery.map((img, i) => (
            <figure key={img.expected} className={`reveal group ${i % 3 === 1 ? "lg:mt-10" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
                <MediaImage asset={img} />
              </div>
              <figcaption className="mt-3 text-sm text-mute">
                <span className="mr-2 text-accent">{String(i + 1).padStart(2, "0")}</span>{img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-16 text-xs text-mute">Screenshots are from my own working sessions. Any illustrative mockups are labeled as such.</p>
      </div>
    </section>
  );
}
