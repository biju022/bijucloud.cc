import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/portfolio";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.05, 0.2, 0.5] }
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/65 px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <button
          onClick={() => goTo("home")}
          className="rounded-xl px-3 py-2 font-display text-sm font-bold text-white"
          aria-label="Go to home"
        >
          BB<span className="text-sky-400">.</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                active === item.id
                  ? "bg-white/10 text-white shadow-inner shadow-white/5"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="rounded-xl p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {open && (
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold ${
                  active === item.id ? "bg-white/10 text-white" : "text-slate-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}