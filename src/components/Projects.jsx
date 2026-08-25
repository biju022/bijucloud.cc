import { ExternalLink, FolderGit2 } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-shell">
        <Reveal>
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Selected Work</p>
            <h2 className="section-title"><span className="gradient-text">Projects</span></h2>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={`${project.title}-${index}`} delay={index * 0.08}>
              <article className="glass flex min-h-[290px] flex-col rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-300">
                    <FolderGit2 size={24} />
                  </div>
                  <ExternalLink size={18} className="text-slate-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-400">{project.description}</p>
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  Project details
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}