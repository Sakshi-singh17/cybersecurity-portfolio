import { AboutSection } from "@/components/AboutSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TryHackMeSection } from "@/components/TryHackMeSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="pb-16">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TryHackMeSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

