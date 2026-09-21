import { motion } from "framer-motion";
import {
  ArrowRight, Download, Globe, Linkedin, Mail, MapPin,
  Server, Settings2, ShipWheel, Cloud
} from "lucide-react";
import { profile } from "../data/portfolio";
import profileImage from "../assets/profile.png";

const toolCards = [
  { label: "AWS", icon: Cloud },
  { label: "Terraform", icon: Settings2 },
  { label: "Jenkins", icon: Settings2 },
  { label: "Docker", icon: ShipWheel },
  { label: "Automation", icon: Server },
];

const stats = [
  ["8+", "Years Experience"],
  ["AWS", "Cloud Expertise"],
  ["100%", "Automation Focus"],
  ["Scalable", "Solutions"],
];

export default function Hero() {
  const goToExperience = () =>
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="grid-overlay absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[34rem] w-[34rem] rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.82fr_0.42fr] xl:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-sky-200">
              AWS • DevOps • Automation • Scalability
            </div>

            <p className="text-lg font-medium text-slate-400 sm:text-xl">Hi, I&apos;m</p>

            <h1 className="mt-2 font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl xl:text-8xl">
              Biju <span className="text-sky-400">Behera</span>
            </h1>

            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              AWS DevOps Engineer
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Building reliable, scalable and secure cloud infrastructure with automation,
              best practices and modern DevOps tools on AWS.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-sky-300">
              <MapPin size={17} /> {profile.location}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={goToExperience}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5"
              >
                View Experience <ArrowRight size={17} />
              </button>

              <a
                href="/Biju_Behera_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.07]"
              >
                Download Resume <Download size={17} />
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a href="http://linkedin.com/in/biju-behera-196509a4" target="_blank" rel="noreferrer"
                aria-label="LinkedIn" className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 hover:border-sky-400/30 hover:text-sky-300">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 hover:border-sky-400/30 hover:text-sky-300">
                <Mail size={18} />
              </a>
              <a href={profile.website} target="_blank" rel="noreferrer" aria-label="Website"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 hover:border-sky-400/30 hover:text-sky-300">
                <Globe size={18} />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-y-5 border-t border-white/10 pt-7 sm:grid-cols-4 sm:gap-0">
              {stats.map(([value, label], index) => (
                <div key={label} className={`pr-5 ${index > 0 ? "sm:border-l sm:border-white/10 sm:pl-5" : ""}`}>
                  <p className="font-display text-xl font-bold text-sky-300 sm:text-2xl">{value}</p>
                  <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[430px]"
          >
            <div className="absolute inset-5 rounded-[2rem] bg-blue-500/20 blur-3xl" />
            <div className="relative rounded-[2rem] bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-[2px] shadow-2xl shadow-blue-500/20">
              <div className="rounded-[1.9rem] bg-[#050816] p-2">
                <img
                  src={profileImage}
                  alt="Biju Behera"
                  className="block h-auto max-h-[760px] w-full rounded-[1.55rem] object-contain object-center"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-sky-300/20 bg-slate-950/85 px-5 py-4 text-center shadow-2xl backdrop-blur-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">Passionate about</p>
              <p className="mt-1 text-sm font-semibold text-white">Cloud Automation &amp; Scalable Infrastructure</p>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative pl-7">
              <div className="absolute bottom-8 left-0 top-8 w-px bg-gradient-to-b from-sky-400/80 via-blue-500/40 to-transparent" />
              <div className="mb-6 text-right">
                <p className="font-display text-3xl font-bold text-white">aws</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-300">Cloud</p>
              </div>
              <div className="space-y-4">
                {toolCards.map(({ label, icon: Icon }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + index * 0.08 }}
                    className="relative flex items-center gap-3"
                  >
                    <span className="absolute -left-7 h-px w-7 bg-sky-400/40" />
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/75 text-sky-300 shadow-xl backdrop-blur">
                      <Icon size={22} />
                    </div>
                    <span className="text-sm font-semibold text-slate-300">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-2 text-slate-600">
          <div className="h-7 w-4 rounded-full border border-slate-600 p-1">
            <div className="mx-auto h-1.5 w-1 rounded-full bg-slate-400" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
