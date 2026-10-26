import { Instagram } from "lucide-react";
import { instagramPosts, profile } from "@/data/portfolio";
import MediaImage from "./MediaImage";
import SectionHeading from "./SectionHeading";

export default function CreatorProfile() {
  return (
    <section id="creator" className="border-t border-line bg-coal/40 py-24 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-10">
        <SectionHeading eyebrow="04 — Creator Profile" title="Building a Creative Presence." />

        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div className="reveal rounded-3xl border border-line bg-ink p-8">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-line">
              <MediaImage asset={profile.avatar} sizes="96px" />
            </div>
            <p className="mt-6 text-lg font-medium">{profile.instagramHandle}</p>
            <p className="mt-1 font-serif text-6xl text-accent">{profile.followers}</p>
            <p className="text-sm uppercase tracking-widest text-mute">Followers</p>
            <p className="mt-6 leading-relaxed text-mute">
              I create and explore content around AI-powered fashion videos and creative social media production — my own account is where I test ideas, formats and workflows before bringing them to clients.
            </p>
            {profile.instagramUrl ? (
              <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
                <Instagram className="h-4 w-4" aria-hidden /> View My Instagram
              </a>
            ) : (
              <span className="btn-ghost mt-8 cursor-not-allowed opacity-60" title="Set profile.instagramUrl in data/portfolio.ts">
                <Instagram className="h-4 w-4" aria-hidden /> View My Instagram
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {instagramPosts.map((post) => {
              const inner = (
                <>
                  <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-line">
                    <MediaImage asset={post} sizes="(min-width:768px) 20vw, 50vw" />
                  </div>
                  <p className="mt-2 text-sm">{post.caption}</p>
                  {post.stat && <p className="text-xs text-mute">{post.stat}</p>}
                </>
              );
              return post.url ? (
                <a key={post.expected} href={post.url} target="_blank" rel="noopener noreferrer" className="reveal group">{inner}</a>
              ) : (
                <div key={post.expected} className="reveal group">{inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
