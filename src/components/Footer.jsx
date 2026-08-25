import { Github, Linkedin, Mail } from "lucide-react";
import { contact } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="font-extrabold tracking-[0.15em]"><span className="text-white">BIJU</span> <span className="gradient-text">BEHERA</span></p>
          <p className="mt-1 text-sm text-slate-500">Building scalable solutions on the cloud.</p>
        </div>
        <div className="flex items-center gap-2">
          <a aria-label="LinkedIn" href={contact.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-2 text-slate-400 hover:text-white"><Linkedin size={18} /></a>
          <a aria-label="Email" href={`mailto:${contact.email}`} className="rounded-xl border border-white/10 p-2 text-slate-400 hover:text-white"><Mail size={18} /></a>
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-2 text-slate-400 hover:text-white"><Github size={18} /></a>
        </div>
        <p className="text-xs text-slate-600">© {new Date().getFullYear()} Biju Behera. All rights reserved.</p>
      </div>
    </footer>
  );
}