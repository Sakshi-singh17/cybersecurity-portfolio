import { AnimatedSection } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

const TRYHACKME_PUBLIC_ID = process.env.NEXT_PUBLIC_TRYHACKME_PUBLIC_ID;

export function TryHackMeSection() {
  const hasPublicId = Boolean(TRYHACKME_PUBLIC_ID);

  return (
    <AnimatedSection id="tryhackme" delay={0.1}>
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-18">
        <SectionHeader
          eyebrow="TryHackMe"
          title="🟢 TryHackMe Progress"
          description="Tracking my progress through hands-on labs focused on network security, enumeration, and SOC fundamentals."
        />

        <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-6 text-center shadow-soft">
          {hasPublicId ? (
            <div className="inline-flex w-full max-w-xl items-center justify-center rounded-xl border border-emerald-500/50 bg-slate-900/70 px-3 py-3 overflow-hidden">
              <iframe
                src={`https://tryhackme.com/api/v2/badges/public-profile?userPublicId=${TRYHACKME_PUBLIC_ID}`}
                style={{ border: "none" }}
                className="w-full"
                title="TryHackMe public profile badge"
              />
            </div>
          ) : (
            <div className="inline-flex w-full max-w-xl flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-emerald-500/50 bg-slate-900/70 px-4 py-5 text-xs text-slate-300">
              <p className="font-semibold text-emerald-300">
                TryHackMe badge not configured
              </p>
              <p>
                Set{" "}
                <code className="rounded bg-slate-950 px-1 py-0.5">
                  NEXT_PUBLIC_TRYHACKME_PUBLIC_ID
                </code>{" "}
                in your environment variables (for example in Vercel project
                settings) to show your live TryHackMe badge here.
              </p>
            </div>
          )}
          <p className="max-w-xl text-sm text-slate-300">
            Hands-on labs help me move beyond theory into real scenarios:
            network enumeration, basic privilege escalation paths, and alert
            triage from an analyst perspective.
          </p>
          <p className="text-xs text-slate-400">
            This badge updates live as I complete more TryHackMe rooms focused
            on network security, enumeration and SOC fundamentals.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

