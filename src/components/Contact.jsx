import { useState } from "react";
import { Mail, MessageCircle, Send, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Section from "./Section";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  const whatsapp = `https://wa.me/${profile.phone.replace(/\D/g, "")}`;

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something reliable.">
      <div className="mt-10 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-7 sm:p-9"
        >
          <p className="text-base leading-7 text-slate-400">
            For project details, collaboration, or opportunities, use the contact options below.
          </p>

          <div className="mt-8 space-y-4">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
              <Mail className="text-sky-300" size={19} />
              <span className="text-sm text-slate-300">{profile.email}</span>
            </a>
            <a href={profile.website} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
              <Globe className="text-violet-300" size={19} />
              <span className="text-sm text-slate-300">bijucloud.cc</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-7 sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-300">
              Name
              <input required name="name" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 font-normal text-white outline-none placeholder:text-slate-600 focus:border-sky-400/40" placeholder="Your name" />
            </label>
            <label className="text-sm font-semibold text-slate-300">
              Email
              <input required type="email" name="email" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 font-normal text-white outline-none placeholder:text-slate-600 focus:border-sky-400/40" placeholder="you@example.com" />
            </label>
          </div>

          <label className="mt-5 block text-sm font-semibold text-slate-300">
            Message
            <textarea required name="message" rows="6" className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 font-normal text-white outline-none placeholder:text-slate-600 focus:border-sky-400/40" placeholder="Tell me about your project or opportunity..." />
          </label>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-sky-100">
              <Send size={16} /> Send Message
            </button>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-300 hover:bg-emerald-400/15"
            >
              <MessageCircle size={16} /> Connect on WhatsApp
            </a>
          </div>

          {sent && (
            <p className="mt-4 rounded-xl border border-sky-300/10 bg-sky-300/5 p-3 text-xs text-sky-200">
              The form UI is ready. Connect it to your preferred email/API provider before production use.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}