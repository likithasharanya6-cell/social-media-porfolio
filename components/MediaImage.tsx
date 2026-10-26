import Image from "next/image";
import { ImageOff } from "lucide-react";
import type { ImageAsset } from "@/data/portfolio";

/**
 * Renders an image from the config, or a labeled placeholder when `src` is empty.
 * The parent controls aspect ratio; this fills it.
 */
export default function MediaImage({ asset, priority = false, sizes = "(min-width:768px) 33vw, 100vw" }: { asset: ImageAsset; priority?: boolean; sizes?: string }) {
  if (!asset.src) {
    return (
      <div className="placeholder-bg absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center" role="img" aria-label={`${asset.alt} (placeholder)`}>
        <ImageOff className="h-5 w-5 text-mute" aria-hidden />
        <span className="text-[11px] uppercase tracking-widest text-mute">Add image</span>
        <code className="break-all text-[11px] text-accent/80">/public/assets/{asset.expected}</code>
      </div>
    );
  }
  return <Image src={asset.src} alt={asset.alt} fill sizes={sizes} priority={priority} className="object-cover transition duration-700 group-hover:scale-[1.03]" />;
}
