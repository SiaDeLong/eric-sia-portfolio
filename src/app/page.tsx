import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/ui/Navigation';
import { portfolioContent } from '@/lib/content';

export default function Home() {
  return (
    <>
      <Navigation items={portfolioContent.navigation.items} />
      <main className="min-h-screen">
        <Hero content={portfolioContent.hero} />
        <About content={portfolioContent.about} />
        <Skills skills={portfolioContent.skills.skills} />
        <Experience experiences={portfolioContent.experience.experiences} />
        <Projects />
        <Contact content={portfolioContent.contact} />
      </main>
    </>
  );
}
