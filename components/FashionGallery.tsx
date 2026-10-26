import { fashionGallery, fashionVideos } from "@/data/portfolio";
import MediaImage from "./MediaImage";
import SectionHeading from "./SectionHeading";
import VideoPlayer from "./VideoPlayer";

const ratioClass = { portrait: "aspect-[3/4]", landscape: "aspect-[16/10]", square: "aspect-square" };

export default function FashionGallery() {
  return (
    <section id="fashion" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-10">
        <SectionHeading
          eyebrow="03 — AI Fashion & Virtual Influencers"
          title="Creating Fashion Content Beyond Reality."
          intro="I combine fashion concepts, visual storytelling, AI-generated personalities, styling ideas and creative direction into short-form fashion videos — so brands can explore campaign ideas without every concept starting with a traditional photoshoot."
        />

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {fashionGallery.map((img) => (
            <figure key={img.expected} className="reveal group mb-5 break-inside-avoid">
              <div className={`relative overflow-hidden rounded-2xl border border-line ${ratioClass[img.ratio]}`}>
                <MediaImage asset={img} />
              </div>
              <figcaption className="mt-3 font-serif text-xl italic text-bone/90">{img.caption}</figcaption>
            </figure>
          ))}
        </div>

        <h3 className="mt-24 font-serif text-4xl">Fashion Films</h3>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fashionVideos.map((v) => (
            <article key={v.title} className="reveal">
              <VideoPlayer video={v.video} label={v.title} />
              <span className="mt-4 inline-block rounded-full border border-accent/40 px-3 py-1 text-[10px] uppercase tracking-widest text-accent">{v.label}</span>
              <h4 className="mt-3 text-lg font-medium">{v.title}</h4>
              <p className="mt-1 text-sm text-mute">{v.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-12 text-xs text-mute">All fashion visuals are AI-generated creative work. Concept pieces are not client campaigns unless stated.</p>
      </div>
    </section>
  );
}
