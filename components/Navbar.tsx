import Link from "next/link";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#tryhackme", label: "TryHackMe" },
  { href: "#blog", label: "Blogs" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="#home" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/40" />
          <span className="text-sm font-semibold tracking-tight text-slate-100">
            Sakshi Singh
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald-500/20 hover:text-emerald-200"
        >
          Let&apos;s connect
        </a>
      </nav>
    </header>
  );
}

