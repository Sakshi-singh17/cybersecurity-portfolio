import { AnimatedSection } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

export function AboutSection() {
  return (
    <AnimatedSection id="about" delay={0.1}>
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-18">
        <SectionHeader
          eyebrow="About"
          title="Aspiring Cybersecurity Analyst with a software engineering background"
        />

        <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          <div className="space-y-4 text-sm leading-relaxed text-slate-300">
            <p>
              I am currently building hands-on experience in network security,
              log analysis, and web vulnerabilities while strengthening my
              software engineering foundation.
            </p>
            <p>
              My background includes Java and Python, with experience thinking
              in backend systems and APIs. I&apos;m now reusing that mindset to
              understand how attacks actually show up in logs, packets, and
              misconfigurations that defenders deal with daily.
            </p>
            <p>
              I&apos;m especially interested in Security Operations Center
              (SOC) workflows: triaging alerts, correlating signals, and
              documenting clear findings. This portfolio is not a list of
              buzzwords—it is a transparent record of what I&apos;ve actually
              practiced.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 text-sm text-slate-300 shadow-soft">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
              Snapshot
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-slate-100">
                  Learning focus:
                </span>{" "}
                network traffic analysis, log parsing, basic threat detection.
              </li>
              <li>
                <span className="font-semibold text-slate-100">
                  What I practice:
                </span>{" "}
                Wireshark captures, enumeration labs, small tooling projects.
              </li>
              <li>
                <span className="font-semibold text-slate-100">
                  Mindset:
                </span>{" "}
                honest about my level, focused on depth over buzzwords.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

