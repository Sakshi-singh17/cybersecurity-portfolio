import { AnimatedSection } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

type Blog = {
  title: string;
  platform: "Hashnode" | "Medium" | "Blog";
  link: string;
  summary: string;
};

const BLOGS: Blog[] = [
  {
    title: "Understanding SMB Enumeration using enum4linux",
    platform: "Hashnode",
    link: "https://hashnode.com/@your-hashnode-username",
    summary:
      "Walking through a lab focused on discovering shares, users, and misconfigurations over SMB using enum4linux and Nmap."
  },
  {
    title: "Wireshark for Beginners: How I Analyzed Network Traffic",
    platform: "Medium",
    link: "https://medium.com/@your-medium-handle",
    summary:
      "Notes from my first captures: decoding HTTP, TLS handshakes, and recognizing noisy or suspicious traffic patterns."
  },
  {
    title: "Log Analysis Basics for SOC Analysts",
    platform: "Blog",
    link: "https://hashnode.com/@your-hashnode-username",
    summary:
      "How I approached log parsing, error frequency, and basic triage thinking while building a small log analysis tool."
  }
];

export function BlogSection() {
  return (
    <AnimatedSection id="blog" delay={0.1}>
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-18">
        <SectionHeader
          eyebrow="Learning Journal"
          title="📘 My Cybersecurity Learning Journey"
          description="I document what I learn in public so others at the same stage can follow along and so I can revisit concepts later."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {BLOGS.map((blog) => (
            <a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 text-left shadow-soft transition hover:-translate-y-1 hover:border-emerald-400/70"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  {blog.platform}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-slate-50">
                  {blog.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300">{blog.summary}</p>
              </div>
              <span className="mt-4 text-xs font-semibold text-emerald-300">
                Read post ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

