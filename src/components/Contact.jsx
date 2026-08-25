import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import Reveal from "./Reveal";
import { contact } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "Website visitor"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <div className="section-shell">
        <Reveal>
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Get in touch</p>
            <h2 className="section-title">Contact <span className="gradient-text">Me</span></h2>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <Reveal>
            <form onSubmit={submit} className="glass rounded-3xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm text-slate-300">
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-indigo-400/50"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm text-slate-300">
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-indigo-400/50"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="mt-5 block text-sm text-slate-300">
                Message
                <textarea
                  required
                  rows="7"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-indigo-400/50"
                  placeholder="Tell me about your requirement..."
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button className="btn-primary" type="submit">
                  <Send size={17} /> Send Message
                </button>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-400"
                >
                  <MessageCircle size={18} /> Connect on WhatsApp
                </a>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="glass flex flex-col justify-between rounded-3xl p-7">
              <div>
                <div className="inline-flex rounded-2xl bg-indigo-500/10 p-4 text-indigo-300">
                  <Mail size={28} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">Let's build something reliable.</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  For project information, work history details, or collaboration opportunities,
                  use the form or reach out directly.
                </p>
              </div>
              <div className="mt-10 space-y-3 text-sm text-slate-300">
                <a className="block hover:text-white" href={`mailto:${contact.email}`}>{contact.email}</a>
                <a className="block hover:text-white" href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
                <a className="block hover:text-white" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}