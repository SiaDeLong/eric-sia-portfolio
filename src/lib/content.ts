import type { PortfolioContent } from './types';

export const portfolioContent: PortfolioContent = {
  hero: {
    name: "Eric Sia",
    title: "Senior Full-Stack Engineer",
    tagline: "Crafting beautiful, performant web experiences with modern technologies",
    ctaText: "Get in touch",
    ctaLink: "#contact"
  },
  about: {
    summary: "I build exceptional digital experiences that combine elegant code with stunning design. Specializing in modern web technologies, I transform complex challenges into intuitive solutions that users love and businesses need.",
    image: "/images/profile.svg",
    imageAlt: "Professional headshot"
  },
  skills: {
    skills: [
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Vue.js", category: "Frontend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "CSS3", category: "Styling" },
      { name: "Sass", category: "Styling" },
      { name: "Framer Motion", category: "Animation" },
      { name: "GSAP", category: "Animation" },
      { name: "Git", category: "Tools" },
      { name: "Webpack", category: "Tools" },
      { name: "Vite", category: "Tools" },
    ]
  },
  experience: {
    experiences: [
      {
        company: "Tech Company A",
        role: "Senior Frontend Engineer",
        duration: "2 years",
        startDate: "2022-01",
        endDate: "2024-01",
        achievements: [
          "Led frontend architecture redesign improving performance by 40%",
          "Mentored team of 5 junior developers",
          "Implemented design system used across 10+ products"
        ]
      },
      {
        company: "Startup B",
        role: "Full-Stack Developer",
        duration: "2 years",
        startDate: "2020-01",
        endDate: "2022-01",
        achievements: [
          "Built responsive web applications from scratch",
          "Integrated RESTful APIs and GraphQL endpoints",
          "Improved code quality through testing and code reviews"
        ]
      },
      {
        company: "Digital Agency C",
        role: "Frontend Developer",
        duration: "1.5 years",
        startDate: "2018-06",
        endDate: "2020-01",
        achievements: [
          "Developed pixel-perfect responsive websites for 20+ clients",
          "Optimized web performance achieving 95+ Lighthouse scores",
          "Collaborated with designers to implement modern UI/UX patterns"
        ]
      }
    ]
  },
  projects: {
    projects: [
      {
        title: "E-Commerce Platform",
        description: "A modern e-commerce platform with real-time inventory management and seamless checkout experience",
        technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
        image: "/images/project1.jpg",
        imageAlt: "E-commerce platform screenshot",
        liveUrl: "https://example.com",
        sourceUrl: "https://github.com/username/ecommerce"
      },
      {
        title: "Portfolio Dashboard",
        description: "Interactive dashboard for tracking investment portfolios with real-time data visualization",
        technologies: ["React", "TypeScript", "D3.js", "Node.js"],
        image: "/images/project2.jpg",
        imageAlt: "Portfolio dashboard screenshot",
        liveUrl: "https://example.com/dashboard"
      },
      {
        title: "Task Management App",
        description: "Collaborative task management application with drag-and-drop interface and team features",
        technologies: ["Vue.js", "Vuex", "Firebase", "Tailwind CSS"],
        image: "/images/project3.jpg",
        imageAlt: "Task management app screenshot",
        sourceUrl: "https://github.com/username/taskapp"
      }
    ]
  },
  contact: {
    heading: "Let's work together",
    subheading: "I'm currently open to new opportunities and exciting projects",
    socialLinks: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/username", icon: "linkedin" },
      { platform: "GitHub", url: "https://github.com/username", icon: "github" },
      { platform: "Email", url: "mailto:email@example.com", icon: "email" }
    ]
  },
  navigation: {
    items: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" }
    ]
  },
  metadata: {
    title: "Your Name - Senior Full-Stack Engineer",
    description: "Portfolio showcasing frontend development and design work",
    ogImage: "/images/og-image.jpg",
    url: "https://yourportfolio.com"
  }
};
