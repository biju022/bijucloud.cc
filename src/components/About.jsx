import { Cloud, ShieldCheck, Terminal, Workflow } from "lucide-react";
import Reveal from "./Reveal";
import { certification } from "../data/portfolio";

export default function About() {
  return (
    <section id="about">
      <div className="section-shell">
        <Reveal>
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Profile</p>
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_.6fr]">
          <Reveal>
            <article className="glass rounded-3xl p-7 sm:p-9">
              <p className="text-base leading-8 text-slate-300 sm:text-lg">
                I am a dedicated AWS Engineer with five years of IT expertise, with a strong focus on
                AWS cloud and DevOps engineering. I specialize in designing, deploying and managing
                scalable cloud infrastructure, with hands-on experience across Linux, Terraform,
                Jenkins, Docker and AWS services.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-400">
                My approach combines cloud architecture, automation, CI/CD and operational reliability.
                I also work with Kubernetes-oriented DevOps workflows as part of the modern cloud stack.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  [Cloud, "Cloud Architecture"],
                  [Workflow, "DevOps Automation"],
                  [ShieldCheck, "Cloud Security"],
                ].map(([Icon, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                    <Icon className="mb-3 text-indigo-300" size={21} />
                    <p className="text-sm font-semibold text-slate-200">{label}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="glass rounded-3xl p-7">
              <Terminal className="text-cyan-300" size={30} />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Certification</p>
              <h3 className="mt-2 text-xl font-bold text-white">{certification.name}</h3>
              <p className="mt-2 text-sm text-slate-400">
                {certification.issuer} · {certification.credential} · {certification.year}
              </p>
              <div className="mt-8 h-px bg-white/10" />
              <p className="mt-6 text-sm leading-6 text-slate-400">
                The resume also records experience designing resilient AWS architectures, managing Linux servers,
                deploying WAFs, and operating web/application servers.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}