import { AnimatedSection } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" delay={0.1}>
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-18">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s connect"
          description="Open to internships, entry-level roles, and collaborative learning opportunities in cybersecurity and security-focused engineering."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <a
            href="mailto:your.email@example.com"
            className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-soft transition hover:-translate-y-1 hover:border-emerald-400/70"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Email
              </p>
              <p className="mt-2 text-sm font-medium text-slate-50">
                your.email@example.com
              </p>
            </div>
            <span className="mt-4 text-xs text-slate-300">Preferred</span>
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-soft transition hover:-translate-y-1 hover:border-emerald-400/70"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                LinkedIn
              </p>
              <p className="mt-2 text-sm font-medium text-slate-50">
                /in/your-linkedin
              </p>
            </div>
            <span className="mt-4 text-xs text-slate-300">
              Networking & opportunities
            </span>
          </a>

          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-soft transition hover:-translate-y-1 hover:border-emerald-400/70"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                GitHub
              </p>
              <p className="mt-2 text-sm font-medium text-slate-50">
                @your-github-username
              </p>
            </div>
            <span className="mt-4 text-xs text-slate-300">
              Code, labs & experiments
            </span>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

