import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-site flex-col justify-between gap-4 px-5 text-sm text-mute md:flex-row md:px-10">
        <p>© {new Date().getFullYear()} {profile.name}. {profile.title}.</p>
        <a href="#top" className="hover:text-bone">Back to top ↑</a>
      </div>
    </footer>
  );
}
