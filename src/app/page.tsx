import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/ui/Navigation";
import { portfolioContent } from "@/lib/content";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Eric Sia",
    jobTitle: "Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer specializing in React, Spring Boot, and AWS with 4+ years of experience",
    url: "https://eric-sia-portfolio.vercel.app",
    image: "https://eric-sia-portfolio.vercel.app/Profile.jpeg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuala Lumpur",
      addressCountry: "Malaysia",
    },
    sameAs: [
      "https://www.linkedin.com/in/eric-sia-b0385a284/",
      "https://github.com/SiaDeLong",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Spring Boot",
      "AWS",
      "Microservices",
      "Docker",
      "Kubernetes",
      "Java",
      "TypeScript",
      "React Native",
    ],
    worksFor: [{ "@type": "Organization", name: "OpenMove AI Bhd" }],
  };

  const { hero, about, skills, experience, projects, contact, navigation } =
    portfolioContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation items={navigation.items} />
      <main className="min-h-screen">
        <Hero content={hero} />
        <div className="section-divider" />
        <About content={about} />
        <div className="section-divider" />
        <Skills
          skills={skills.skills}
          sectionLabel={skills.sectionLabel}
          heading={skills.heading}
          subheading={skills.subheading}
          marqueeItems={skills.marqueeItems}
        />
        <div className="section-divider" />
        <Experience
          experiences={experience.experiences}
          sectionLabel={experience.sectionLabel}
          heading={experience.heading}
          subheading={experience.subheading}
        />
        <div className="section-divider" />
        <Projects content={projects} />
        <div className="section-divider" />
        <Contact content={contact} />
      </main>
    </>
  );
}
