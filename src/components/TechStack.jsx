import { motion } from "framer-motion";
import Section from "./Section";
import { techStack } from "../data/portfolio";

export default function TechStack() {
  return (
    <Section id="stack" eyebrow="Tech Stack" title="Tools I work with.">
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.045 }}
            whileHover={{ y: -4 }}
            className="glass group rounded-2xl p-5 text-center transition"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-display text-sm font-bold text-sky-300 transition group-hover:border-sky-300/30 group-hover:bg-sky-300/10">
              {tech.icon}
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-200">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}