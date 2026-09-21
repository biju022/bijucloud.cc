import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-sky-300/80">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}