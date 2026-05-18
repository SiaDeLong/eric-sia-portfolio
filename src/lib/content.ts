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
      "Senior Full Stack Engineer (4 years) specializing in scalable enterprise systems using React, Spring Boot, and AWS. Built and supported production platforms serving 100K+ daily requests and multi-country business operations. Experienced in microservices and event-driven architectures, driving improvements in deployment efficiency, system reliability, and production scalability across enterprise workloads and high-traffic systems.",
    highlights: [
      { number: "4", label: "Years Experience" },
      { number: "100K+", label: "Daily Requests" },
      { number: "Multi-Country", label: "Operations" },
    ],
  },
  skills: {
    skills: [
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "React Native", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Java", category: "Backend" },
      { name: "Spring Boot", category: "Backend" },
      { name: "Node.js", category: "Backend" },
      { name: "REST APIs", category: "Backend" },
      { name: "Microservices", category: "Backend" },
      { name: "MySQL", category: "Database" },
      { name: "PostgreSQL", category: "Database" },
      { name: "MSSQL", category: "Database" },
      { name: "DB2", category: "Database" },
      { name: "Redis", category: "Database" },
      { name: "AWS", category: "Cloud & DevOps" },
      { name: "Docker", category: "Cloud & DevOps" },
      { name: "Kubernetes", category: "Cloud & DevOps" },
      { name: "CI/CD", category: "Cloud & DevOps" },
      { name: "Jenkins", category: "Cloud & DevOps" },
      { name: "GitHub Actions", category: "Cloud & DevOps" },
      { name: "Angular", category: "Other" },
      { name: "Vue", category: "Other" },
      { name: "Python", category: "Other" },
      { name: "R", category: "Other" },
      { name: "C# .NET", category: "Other" },
    ],
  },
  experience: {
    experiences: [
      {
        company: "OpenMove AI Bhd",
        role: "Senior Executive – Full Stack Engineer",
        duration: "1.5 Years",
        startDate: "2024-10",
        endDate: "2026-05",
        achievements: [
          "Architected and delivered enterprise platforms (CommissionSuite) supporting multi-country operations (MY/TH) with 4+ top Thailand insurer clients, processing 300K+ monthly transactions",
          "Designed system architecture on AWS (ECS/EKS, Lambda, RDS, CloudWatch, CI/CD) and deployed end-to-end solutions",
          "Introduced event-driven architecture using RabbitMQ and AWS SQS, improving system responsiveness and scalability under high transaction loads",
          "Led team of 4+ engineers enabling Thailand market expansion and supporting regional franchise operations",
          "Introduced Docker-based containerization reducing onboarding time by 50-70% and eliminating environment-related deployment issues",
          "Improved system reliability using AWS CloudWatch logging, reducing production incidents by 30-50%",
          "Mentored 30+ engineers through structured knowledge-sharing sessions on React, Spring Boot, and AWS architecture",
        ],
      },
      {
        company: "Plaza Premium Group",
        role: "Software Engineer",
        duration: "1.5 Years",
        startDate: "2023-04",
        endDate: "2024-10",
        achievements: [
          "Maintained and enhanced backend microservices using Java Spring Boot, supporting 100K+ daily requests across multiple services",
          "Maintained loyalty points system with wallet and ledger architecture, supporting secure point tracking and redemption",
          "Deployed and managed AWS cloud infrastructure using CI/CD pipelines (Jenkins), reducing deployment time by 40-60%",
          "Resolved high-impact production issue in Smart Traveller React Native app affecting thousands of users",
          "Led migration of Smart Traveller Admin Portal from Angular 5 to Angular LTS, improving load performance by 30-50%",
          "Developed feature enhancements for PWA-based POS system, improving transaction processing efficiency by 20-35%",
          "Built serverless AWS API integration portal for internal and external developers, reducing API onboarding time from days to hours",
          "Implemented Redis-based queue processing system on AWS EC2, improving background job throughput by 2-3x",
        ],
      },
      {
        company: "Matrixtudios",
        role: "IT Intern",
        duration: "6 Months",
        startDate: "2022-04",
        endDate: "2022-09",
        achievements: [
          "Developed Next.js landing page for marketing campaigns, improving page load performance and engagement metrics by 20-40%",
          "Implemented Zapier + Odoo automation for social media workflows, reducing manual effort by 50-70%",
          "Supported onboarding and mentoring of junior interns, improving onboarding speed from 2 weeks to 3-5 days",
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
        image: "/images/project2.jpg",
        imageAlt: "新プル Booth POS system screenshot",
        liveUrl: "",
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
