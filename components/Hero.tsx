import { ArrowDown, Instagram, Users } from "lucide-react";
import { hero, profile } from "@/data/portfolio";
import MediaImage from "./MediaImage";

export default function Hero() {
  const [a, b, c, d] = hero.collage;
  const tiles = [
    { asset: a, cls: "col-span-4 row-span-4" },
    { asset: b, cls: "col-span-2 row-span-3" },
    { asset: c, cls: "col-span-2 row-span-3" },
    { asset: d, cls: "col-span-4 row-span-2" },
  ];
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="mx-auto grid max-w-site gap-14 px-5 pb-20 md:px-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div>
          <p className="eyebrow mb-6">{profile.name} · {profile.title}</p>
          <h1 className="font-serif text-[clamp(3rem,7.5vw,6.5rem)] leading-[.95] tracking-tight">
            I Turn Ideas Into <em className="text-accent">Scroll-Stopping</em> Content.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-mute">{hero.description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#research" className="btn-primary">Explore My Work <ArrowDown className="h-4 w-4" aria-hidden /></a>
            <a href="#contact" className="btn-ghost">Let&apos;s Work Together</a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2">
              <Users className="h-4 w-4 text-accent" aria-hidden />
              <strong className="font-semibold">{profile.followers}</strong> <span className="text-mute">Followers</span>
            </span>
            <a
              href={profile.instagramUrl || "#creator"}
              className="inline-flex items-center gap-2 text-mute hover:text-bone"
              {...(profile.instagramUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Instagram className="h-4 w-4" aria-hidden /> {profile.instagramHandle}
            </a>
          </div>
        </div>

        {/* Editorial collage — swap images in data/portfolio.ts → hero.collage */}
        <div className="grid aspect-[4/5] grid-cols-6 grid-rows-6 gap-3 sm:aspect-square lg:aspect-[4/5]">
          {tiles.map(({ asset, cls }) => (
            <figure key={asset.expected} className={`group relative overflow-hidden rounded-2xl border border-line ${cls}`}>
              <MediaImage asset={asset} priority sizes="(min-width:1024px) 30vw, 60vw" />
              <figcaption className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur">{asset.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
