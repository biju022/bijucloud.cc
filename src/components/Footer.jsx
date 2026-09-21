import { ArrowUpRight, Linkedin } from "lucide-react";
import { profile, socialLinks } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display font-bold text-white">
            {profile.name}<span className="text-sky-400">.</span>
          </p>
          <p className="mt-1 text-xs text-slate-600">© {year} {profile.name}. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {socialLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                {link.label}
                {link.href.startsWith("http") && <ArrowUpRight size={13} />}
              </a>
            ) : (
              <span
                key={link.label}
                title="LinkedIn URL was not provided in the resume."
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-600"
              >
                <Linkedin size={13} /> {link.label} (URL unavailable)
              </span>
            )
          )}
        </div>
      </div>
    </footer>
  );
}