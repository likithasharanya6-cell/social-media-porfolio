import { Film } from "lucide-react";
import type { VideoAsset } from "@/data/portfolio";

/**
 * Native, lazy video player (preload="none" so nothing downloads until play).
 * Shows a placeholder frame with the expected file path when `src` is empty.
 */
export default function VideoPlayer({ video, label, className = "aspect-[9/16]" }: { video: VideoAsset; label: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-line bg-coal ${className}`}>
      {video.src ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={video.src}
          poster={video.poster || undefined}
          controls
          playsInline
          preload="none"
          aria-label={label}
        />
      ) : (
        <div className="placeholder-bg absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line">
            <Film className="h-5 w-5 text-mute" aria-hidden />
          </span>
          <p className="text-xs uppercase tracking-widest text-mute">Video coming soon</p>
          <code className="break-all text-[11px] text-accent/80">/public/assets/{video.expected}</code>
        </div>
      )}
    </div>
  );
}
