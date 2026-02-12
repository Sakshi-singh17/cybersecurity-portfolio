import { AnimatedSection } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

type Project = {
  title: string;
  description: string;
  tools: string[];
  relevance: string;
  github?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Log Analyzer Tool (Java + JavaFX)",
    description:
      "Desktop tool to parse and explore application logs with filters for level, timestamps, and frequent errors. Designed to support SOC-style triage workflows.",
    tools: ["Java", "JavaFX", "File I/O", "Basic parsing"],
    relevance:
      "Mimics log analysis tasks analysts perform when investigating incidents or noisy services.",
    github: "https://github.com/your-github-username/log-analyzer"
  },
  {
    title: "Network Traffic Analysis using Wireshark",
    description:
      "Captured and analyzed real HTTP, HTTPS, DNS, DHCP, SMTP and SFTP traffic. Used filters to isolate flows and observe potential DoS patterns and TLS handshakes.",
    tools: ["Wireshark", "Packet Capture", "Protocol Analysis"],
    relevance:
      "Builds intuition for normal vs suspicious traffic and how attacks show up on the wire.",
    github: "https://github.com/your-github-username/network-traffic-labs"
  },
  {
    title: "SMB Enumeration Lab",
    description:
      "Enumerated SMB shares and users in a lab environment using enum4linux and Nmap, documenting accessible resources and potential misconfigurations.",
    tools: ["enum4linux", "Nmap", "Linux"],
    relevance:
      "Maps directly to common internal enumeration techniques and MITRE ATT&CK discovery tactics.",
    github: "https://github.com/your-github-username/smb-enum-lab"
  },
  {
    title: "Web Vulnerability Practice",
    description:
      "Experimented with HTML injection scenarios and simple input validation issues in intentionally vulnerable pages, then documented secure alternatives.",
    tools: ["HTML", "Basic JavaScript", "Burp Suite (interception)"],
    relevance:
      "Introduces web app attack surface and how weak validation leads to injection vulnerabilities.",
    github: "https://github.com/your-github-username/web-vuln-practice"
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-soft">
      <div>
        <h3 className="text-sm font-semibold text-slate-50">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-300">{project.description}</p>

        <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1"
            >
              {tool}
            </span>
          ))}
        </div>

        <p className="mt-3 text-xs text-emerald-300/90">
          Security relevance: {project.relevance}
        </p>
      </div>

      {project.github && (
        <div className="mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 hover:text-emerald-200"
          >
            <span>View on GitHub</span>
            <span aria-hidden>↗</span>
          </a>
        </div>
      )}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" delay={0.1}>
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-18">
        <SectionHeader
          eyebrow="Projects"
          title="Hands-on security projects and labs"
          description="Each project is chosen to practice specific SOC-relevant skills without overstating my experience."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

