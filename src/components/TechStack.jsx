import {
  Activity, Cloud, Code2, Container, FileCode2, GitBranch, Globe2, HardDrive,
  MonitorCog, Network, Server, Shield, TerminalSquare
} from "lucide-react";
import Reveal from "./Reveal";
import { techStack } from "../data/portfolio";

const icons = [
  Cloud, Network, Shield, TerminalSquare, FileCode2, GitBranch, Container,
  TerminalSquare, Server, Globe2, Activity,
];

export default function TechStack() {
  return (
    <section id="tech-stack">
      <div className="section-shell">
        <Reveal>
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Capabilities</p>
            <h2 className="section-title"><span className="gradient-text">Tech</span> Stack</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {techStack.map((tech, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={tech} delay={index * 0.025}>
                <div className="glass group h-full rounded-2xl p-5 transition hover:-translate-y-1 hover:border-indigo-300/25 hover:bg-white/[0.07]">
                  <Icon size={26} className="text-indigo-300 transition group-hover:text-cyan-300" />
                  <p className="mt-4 text-sm font-semibold leading-5 text-slate-200">{tech}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}