"use client";
import Image from "next/image";
import { useState } from "react";

/** Drag/keyboard comparison of the BEFORE and AFTER poster frames. Rendered only when both posters exist. */
export default function CompareSlider({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-video select-none overflow-hidden rounded-2xl border border-line">
      <Image src={after} alt="After — edited frame" fill className="object-cover" sizes="(min-width:1024px) 60vw, 100vw" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt="Before — original frame" fill className="object-cover" sizes="(min-width:1024px) 60vw, 100vw" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-bone" style={{ left: `${pos}%` }} />
      <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-semibold tracking-widest">BEFORE</span>
      <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold tracking-widest text-ink">AFTER</span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after frames"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
