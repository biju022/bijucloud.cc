import { motion } from "framer-motion";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import Section from "./Section";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Trajectory" title="Experience across cloud, infrastructure, and operations.">
      <div className="relative mt-12">
        <div className="timeline-line absolute bottom-0 left-[13px] top-0 w-px md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.duration}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5 }}
              className="relative md:grid md:grid-cols-2 md:gap-12"
            >
              <div className={`${index % 2 ? "md:col-start-2" : "md:col-start-1"} pl-10 md:pl-0`}>
                <div className="glass rounded-3xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                        {item.duration}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-bold text-white">{item.role}</h3>
                      <p className="mt-1 font-semibold text-slate-300">{item.company}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-sky-300">
                      <BriefcaseBusiness size={18} />
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                    <MapPin size={14} />
                    {item.location}
                  </div>

                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute left-[7px] top-8 z-10 h-3 w-3 rounded-full border-2 border-slate-950 bg-sky-400 shadow-[0_0_0_5px_rgba(56,189,248,0.10)] md:left-1/2 md:-translate-x-1/2" />
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}