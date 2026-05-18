// Type definitions for portfolio content

export interface HeroContent {
  name: string;
  title: string;
  tagline: string;
  location: string;
  resumePath: string;
  ctaPrimary: string;
  ctaSecondary: string;
  codeCard: {
    filename: string;
    fields: Array<{ key: string; value: string | number | boolean }>;
    comment: string;
  };
}

export interface AboutContent {
  sectionLabel: string;
  heading: string;
  summary: string;
  highlights: Array<{ number: string; label: string }>;
  strengths: string[];
  terminal: {
    filename: string;
    comment: string;
    fields: Array<{ key: string; value: string | number | boolean | string[] }>;
  };
}

export interface Skill {
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Cloud & DevOps"
    | "Other";
  icon?: string;
}

export interface SkillsContent {
  sectionLabel: string;
  heading: string;
  subheading: string;
  marqueeItems: string[];
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  location?: string;
  achievements: string[];
  keyAchievements?: string[];
}

export interface ExperienceContent {
  sectionLabel: string;
  heading: string;
  subheading: string;
  experiences: Experience[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface ProjectsContent {
  sectionLabel: string;
  heading: string;
  subheading: string;
  projects: Project[];
}

export interface SocialLink {
  platform: "LinkedIn" | "GitHub" | "Email" | "Twitter" | "Resume";
  url: string;
  icon: string;
}

export interface ContactContent {
  sectionLabel: string;
  heading: string;
  subheading: string;
  ctaText: string;
  ctaEmail: string;
  socialLinks: SocialLink[];
  footer: {
    logoMark: string;
    builtWith: string;
    copyright: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationContent {
  items: NavItem[];
}

export interface PortfolioContent {
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  experience: ExperienceContent;
  projects: ProjectsContent;
  contact: ContactContent;
  navigation: NavigationContent;
}
