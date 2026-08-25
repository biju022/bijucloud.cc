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
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.2, 0.5] }
    );

    navItems.forEach(([, id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-3 py-2 shadow-2xl shadow-black/20">
        <button onClick={() => go("home")} className="px-3 py-2 text-sm font-extrabold tracking-[0.16em]">
          <span className="text-white">BIJU</span>{" "}
          <span className="gradient-text">BEHERA</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`rounded-xl px-3 py-2 text-sm transition ${
                active === id
                  ? "bg-gradient-to-r from-indigo-500/90 to-violet-500/90 text-white shadow-lg shadow-indigo-500/20"
                  : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          className="rounded-xl p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-2 md:hidden">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`block w-full rounded-xl px-4 py-3 text-left text-sm ${
                active === id ? "bg-indigo-500/20 text-indigo-200" : "text-slate-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}