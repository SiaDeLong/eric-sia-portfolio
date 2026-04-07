import type { PortfolioContent } from "./types";

export const portfolioContent: PortfolioContent = {
  hero: {
    name: "Eric Sia",
    title: "Senior Full-Stack Engineer",
    tagline:
      "Building scalable end-to-end systems and beautiful web experiences with modern technologies",
    location: "KL, Malaysia",
  },
  about: {
    summary:
      "Senior Full Stack Engineer with 4 years of experience building scalable enterprise systems using React, Spring Boot, and AWS. Experienced in microservices architecture, cloud-native deployment, and system modernization. Proven track record in delivering production systems, driving technical initiatives, and supporting international product expansion.",
    highlights: [
      { number: "4", label: "Years Coding" },
      { number: "30+", label: "Projects Built" },
      { number: "10+", label: "Technologies" },
    ],
  },
  skills: {
    skills: [
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "Angular", category: "Frontend" },
      { name: "Vue.js", category: "Frontend" },
      { name: "Progressive Web Apps", category: "Frontend" },
      { name: "Java", category: "Backend" },
      { name: "Spring Boot", category: "Backend" },
      { name: "Node.js", category: "Backend" },
      { name: "Microservices", category: "Backend" },
      { name: "RESTful APIs", category: "Backend" },
      { name: "MySQL", category: "Database" },
      { name: "PostgreSQL", category: "Database" },
      { name: "MSSQL", category: "Database" },
      { name: "Redis", category: "Database" },
      { name: "DB2", category: "Database" },
      { name: "AWS (ECS, EKS, Lambda)", category: "Cloud & DevOps" },
      { name: "Docker", category: "Cloud & DevOps" },
      { name: "Kubernetes", category: "Cloud & DevOps" },
      { name: "Jenkins", category: "Cloud & DevOps" },
      { name: "GitHub Actions", category: "Cloud & DevOps" },
      { name: "Python", category: "Programming" },
      { name: "R", category: "Programming" },
      { name: "React Native", category: "Mobile" },
      { name: "Kotlin", category: "Mobile" },
    ],
  },
  experience: {
    experiences: [
      {
        company: "OpenMove AI Bhd",
        role: "Senior Executive – Full Stack Engineer",
        duration: "Present",
        location: "Selangor",
        startDate: "2024-10",
        endDate: "Present",
        achievements: [
          "Designed AWS architecture and delivered enterprise platforms (CommissionSuite, franchise systems) using React, Spring Boot, and PostgreSQL.",
          "Conducted technical R&D and PoC implementations to explore new business opportunities.",
          "Introduced Docker-based containerization and modern deployment workflows to improve scalability and reliability.",
        ],
        keyAchievements: [
          "Built CommissionSuite, enabling international expansion to Thailand, increasing revenue, and unlocking new market opportunities.",
          "Delivered a COO-led PoC that secured customer approval and additional business.",
          "Secured company approval for a new tech stack, successfully implementing it in production and proving its effectiveness in scalability and maintainability.",
          "Strengthened internal capabilities through developer coaching sessions and structured knowledge-sharing initiatives.",
        ],
      },
      {
        company: "Plaza Premium Group",
        role: "Software Engineer",
        duration: "1.5 years",
        location: "Selangor",
        startDate: "2023-04",
        endDate: "2024-10",
        achievements: [
          "Developed backend services using Java Spring Boot within microservice architecture.",
          "Built frontend systems using React, Angular, Vue, and PWA.",
          "Deployed cloud services on AWS using CI/CD pipelines (Jenkins) & AWS CLI.",
          "Maintained production systems and resolved critical issues.",
        ],
        keyAchievements: [
          "Fixed a critical production issue in the Smart Traveller mobile app (React Native).",
          "Migrated Smart Traveller Admin Portal from Angular 5 to latest Angular LTS.",
          "Developed features for a PWA POS system used in retail operations.",
          "Built serverless AWS API integration portal for internal and client developers.",
          "Implemented Redis-based queue system on AWS EC2.",
        ],
      },
      {
        company: "Matrixtudios",
        role: "IT Intern",
        duration: "6 months",
        location: "Kuala Lumpur",
        startDate: "2022-04",
        endDate: "2022-09",
        achievements: [
          "Developed Next.js landing pages for marketing campaigns.",
          "Implemented Zapier + Odoo automation for social media workflows.",
          "Supported onboarding and mentoring of junior interns.",
        ],
      },
    ],
  },
  projects: {
    projects: [
      {
        title: "新プル Group - Product Landing Platform",
        description:
          "Official landing website with custom domain showcasing developed applications with SEO-optimized responsive design.",
        technologies: ["Next.js", "Custom Domain", "SEO", "Responsive Design"],
        image: "/Simple-Group.png",
        imageAlt: "新プル Group landing platform screenshot",
        liveUrl: "https://shinpuru-group.com",
      },
      {
        title: "新プル Booth - iOS POS System",
        description:
          "Mobile POS system for event booth businesses with product management, order tracking, and premium subscription features.",
        technologies: ["React Native", "Expo Go", "iOS", "In-App Purchase"],
        image: "/Simple-Booth.png",
        imageAlt: "新プル Booth POS system screenshot",
        liveUrl: "https://apps.apple.com/app/shinpuru-booth/id6761042153",
      },
      {
        title: "Yvette Cosplay Showcase",
        description:
          "Custom-built cosplay portfolio designed based on Yvette's requirements, featuring animated character showcases, smooth transitions, and an immersive anime-inspired UI.",
        technologies: [
          "Next.js",
          "Framer Motion",
          "Interactive Character Selector",
          "Responsive Anime UI",
        ],
        image: "/Yvette-Cosplay.jpg",
        imageAlt: "Yvette cosplay interactive portfolio screenshot",
        liveUrl: "https://yvette-chi.vercel.app/",
      },
      {
        title: "Ameiro 雨いろ - Weather App",
        description:
          "Real-time weather monitoring app with worldwide data integration and clean location-based forecast visualization.",
        technologies: ["Next.js", "Weather API", "REST", "Secret Management"],
        image: "/Ame-Iro.png",
        imageAlt: "Ameiro weather app screenshot",
        liveUrl: "https://ameiro-ruddy.vercel.app/",
      },
      {
        title: "Kiro Note 記録ノート - Todo App",
        description:
          "Productivity web app for task management with status tracking and responsive design for all devices.",
        technologies: [
          "Next.js",
          "State Management",
          "Local Storage",
          "Responsive UI",
        ],
        image: "/Kiro-Note.png",
        imageAlt: "Kiro Note todo app screenshot",
        liveUrl: "https://kiro-note.vercel.app/",
      },
    ],
  },
  contact: {
    heading: "Let's work together",
    subheading: "I'm currently open to new opportunities and exciting projects",
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/eric-sia-b0385a284/",
        icon: "linkedin",
      },
      {
        platform: "GitHub",
        url: "https://github.com/SiaDeLong",
        icon: "github",
      },
      {
        platform: "Email",
        url: "mailto:ericsiadelong@outlook.com",
        icon: "email",
      },
      {
        platform: "Resume",
        url: "/Eric_Sia-Senior_Full_Stack_Engineer.pdf",
        icon: "resume",
      },
    ],
  },
  navigation: {
    items: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
};
