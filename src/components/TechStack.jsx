import { motion } from "framer-motion";
import Section from "./Section";

import {
  FaAws,
  FaLinux,
  FaUbuntu,
  FaDocker,
  FaGitAlt,
  FaJenkins,
  FaRobot,
  FaBrain,
} from "react-icons/fa";

import {
  SiTerraform,
  SiAnsible,
  SiApache,
  SiNginx,
  SiPrometheus,
  SiGrafana,
  SiCloudflare,
  SiGithubcopilot,
  SiGnubash,
} from "react-icons/si";

const techStack = [
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Linux", icon: FaLinux, color: "#FCC624" },
  { name: "Ubuntu", icon: FaUbuntu, color: "#E95420" },
  { name: "CentOS", icon: FaLinux, color: "#8A2BE2" },
  { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
  { name: "AWS CloudFormation", icon: FaAws, color: "#FF9900" },
  { name: "Shell Scripting", icon: SiGnubash, color: "#4EAA25" },
  { name: "CloudWatch", icon: FaAws, color: "#FF9900" },
  { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
  { name: "Grafana", icon: SiGrafana, color: "#F46800" },
  { name: "Jenkins", icon: FaJenkins, color: "#D24939" },
  { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
  { name: "Apache", icon: SiApache, color: "#D22128" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "AWS CodeCommit", icon: FaAws, color: "#FF9900" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
  { name: "Sucuri WAF", icon: SiCloudflare, color: "#F38020" },
  { name: "ChatGPT", icon: FaRobot, color: "#10A37F" },
  { name: "Claude", icon: FaBrain, color: "#D97757" },
  { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#FFFFFF" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
];

export default function TechStack() {
  return (
    <Section id="stack" eyebrow="Tools & Technologies" title="My Tech Stack">
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
        Technologies and tools I use to build, automate, secure and scale cloud infrastructure.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.035 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-center shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/30 hover:bg-slate-900/90"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/[0.06] via-transparent to-blue-500/[0.06] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg transition-all duration-300 group-hover:border-sky-400/30 group-hover:bg-white/[0.08]">
                <Icon
                  size={42}
                  color={tech.color}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <p className="relative mt-5 min-h-[40px] text-sm font-semibold leading-5 text-slate-200">
                {tech.name}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/[0.08] to-cyan-400/[0.04] p-5 sm:p-6"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xl">⚡</div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Always Learning</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Exploring new tools and technologies to build better, more efficient and scalable cloud solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
