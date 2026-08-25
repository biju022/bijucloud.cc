import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { contact } from "../data/portfolio";

export default function Hero() {
  const scrollProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div className="grid-overlay pointer-events-none absolute inset-0" />
      <div className="orb absolute -left-20 top-40 h-72 w-72 rounded-full bg-indigo-600/30" />
      <div className="orb absolute -right-20 top-20 h-80 w-80 rounded-full bg-cyan-500/20" />

      <div className="section-shell relative flex min-h-[78vh] items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto"
          >
            <div className="relative h-64 w-64 sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 p-[5px] shadow-[0_0_70px_rgba(99,102,241,.45)]">
                <div className="h-full w-full overflow-hidden rounded-full bg-slate-950 p-1">
                  <img
                    src="/profile.jpg"
                    alt="Biju Behera"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-4 glass rounded-2xl px-4 py-3 text-xs text-slate-200 shadow-xl">
                <span className="text-indigo-300">AWS</span> • DevOps • Linux
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-300">
              AWS Certified Solutions Architect
            </p>
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
              Biju <span className="gradient-text">Behera</span>
            </h1>
            <h2 className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
              AWS DevOps Engineer
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Building scalable, secure and high-performance web applications and cloud infrastructure on AWS.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={scrollProjects} className="btn-primary">
                View Projects <ArrowRight size={18} />
              </button>
              <a href="/resume.pdf" download className="btn-secondary">
                Download Resume <Download size={18} />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-2">
              <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="glass rounded-full px-3 py-2 text-xs text-slate-300 hover:text-white">
                <Phone className="mr-2 inline" size={14} /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="glass rounded-full px-3 py-2 text-xs text-slate-300 hover:text-white">
                <Mail className="mr-2 inline" size={14} /> {contact.email}
              </a>
              <span className="glass rounded-full px-3 py-2 text-xs text-slate-300">
                <MapPin className="mr-2 inline" size={14} /> {contact.location}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}