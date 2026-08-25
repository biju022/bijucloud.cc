import { BriefcaseBusiness, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-shell">
        <Reveal>
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Career</p>
            <h2 className="section-title">Trajectory / <span className="gradient-text">Experience</span></h2>
          </div>
        </Reveal>

        <div className="relative ml-2 border-l border-indigo-400/20 pl-7 sm:ml-5 sm:pl-10">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.duration}`} delay={index * 0.06}>
              <article className="relative mb-8 last:mb-0">
                <span className="absolute -left-[39px] top-2 h-4 w-4 rounded-full border-4 border-[#070a14] bg-gradient-to-br from-indigo-400 to-cyan-300 shadow-[0_0_18px_rgba(99,102,241,.6)] sm:-left-[49px]" />
                <div className={`glass rounded-3xl p-6 sm:p-7 ${item.current ? "border-indigo-400/25 shadow-glow" : ""}`}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-indigo-300">{item.duration}</p>
                      <h3 className="mt-2 text-xl font-bold text-white">{item.company}</h3>
                      <p className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                        <BriefcaseBusiness size={15} /> {item.role}
                      </p>
                      {item.location && (
                        <p className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                          <MapPin size={14} /> {item.location}
                        </p>
                      )}
                    </div>
                    {item.current && (
                      <span className="w-fit rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                        Current
                      </span>
                    )}
                  </div>

                  {Array.isArray(item.details) ? (
                    <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-400">
                      {item.details.map((detail) => <li key={detail} className="list-disc pl-1 marker:text-indigo-400">{detail}</li>)}
                    </ul>
                  ) : (
                    <p className="mt-5 text-sm text-slate-500">{item.details}</p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}