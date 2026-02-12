export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          © {new Date().getFullYear()} Sakshi Singh. Learning in public,
          iterating often.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-emerald-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

