// Type definitions for portfolio content

export interface HeroContent {
  name: string;
  title: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
}

export interface AboutContent {
  summary: string;
  image: string;
  imageAlt: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Styling' | 'Animation' | 'Tools';
  icon?: string;
}

export interface SkillsContent {
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export interface ExperienceContent {
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
  projects: Project[];
}

export interface SocialLink {
  platform: 'LinkedIn' | 'GitHub' | 'Email' | 'Twitter';
  url: string;
  icon: string;
}

export interface ContactContent {
  heading: string;
  subheading: string;
  socialLinks: SocialLink[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationContent {
  items: NavItem[];
}

export interface MetadataContent {
  title: string;
  description: string;
  ogImage: string;
  url: string;
}

export interface PortfolioContent {
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  experience: ExperienceContent;
  projects: ProjectsContent;
  contact: ContactContent;
  navigation: NavigationContent;
  metadata: MetadataContent;
}
