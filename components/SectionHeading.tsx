export default function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="reveal mb-14 max-w-3xl">
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 className="font-serif text-5xl leading-[1.02] md:text-7xl">{title}</h2>
      {intro && <p className="mt-6 text-lg leading-relaxed text-mute">{intro}</p>}
    </header>
  );
}
