import { motion } from "framer-motion";
import { Cloud, Code2, ServerCog, ShieldCheck } from "lucide-react";
import Section from "./Section";
import { profile } from "../data/portfolio";

const highlights = [
  { icon: Code2, title: "Engineering", text: "Automation, scripting, CI/CD, and infrastructure as code." },
  { icon: Cloud, title: "Cloud", text: "AWS architecture, migration, provisioning, and operations." },
  { icon: ServerCog, title: "Platform", text: "Terraform, Jenkins, Ansible, Linux, Docker, and EKS." },
  { icon: ShieldCheck, title: "Reliability", text: "Troubleshooting, observability, security, and production support." },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Engineering with a cloud-first mindset.">
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-7 sm:p-9"
        >
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-7 h-px bg-white/10" />

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-slate-500">Cloud</p>
              <p className="mt-1 text-sm font-semibold text-white">AWS</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-slate-500">IaC</p>
              <p className="mt-1 text-sm font-semibold text-white">Terraform</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-slate-500">CI/CD</p>
              <p className="mt-1 text-sm font-semibold text-white">Jenkins</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs text-slate-500">Containers</p>
              <p className="mt-1 text-sm font-semibold text-white">Docker</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass rounded-3xl p-5"
            >
              <div className="mb-5 inline-flex rounded-xl border border-sky-300/15 bg-sky-300/5 p-3 text-sky-300">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}