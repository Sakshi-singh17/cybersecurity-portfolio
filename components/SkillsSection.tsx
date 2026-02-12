import { AnimatedSection } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

type SkillCategory = {
  title: string;
  items: string[];
  highlight?: string;
};

const SECURITY_CONCEPTS: SkillCategory = {
  title: "Security Concepts",
  items: [
    "Network Security",
    "Web Vulnerabilities (HTML Injection, XSS basics)",
    "Log Analysis (SOC basics)",
    "MITRE ATT&CK (introductory)"
  ],
  highlight: "Building foundations for SOC & blue-team workflows."
};

const TOOLS: SkillCategory = {
  title: "Tools",
  items: [
    "Wireshark",
    "Nmap",
    "enum4linux",
    "Burp Suite (basic)",
    "Linux, SSH"
  ],
  highlight: "Comfortable in terminal-driven workflows and packet analysis."
};

const PROGRAMMING: SkillCategory = {
  title: "Programming",
  items: [
    "Java",
    "Python",
    "JavaFX",
    "Spring Boot (learning)",
    "Next.js"
  ],
  highlight:
    "Using software engineering skills to build practical security tooling."
};

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="gradient-border flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-soft">
      <div>
        <h3 className="text-sm font-semibold text-slate-50">
          {category.title}
        </h3>
        <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
          {category.items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400/80" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {category.highlight && (
        <p className="mt-4 text-xs text-emerald-300/90">
          {category.highlight}
        </p>
      )}
    </div>
  );
}

export function SkillsSection() {
  return (
    <AnimatedSection
      id="skills"
      delay={0.1}
    >
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-18">
        <SectionHeader
          eyebrow="Skills"
          title="Security skills grounded in software engineering"
          description="I am intentionally building a security toolkit while staying honest about being in the learning stage."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <SkillCard category={SECURITY_CONCEPTS} />
          <SkillCard category={TOOLS} />
          <SkillCard category={PROGRAMMING} />
        </div>
      </div>
    </AnimatedSection>
  );
}

