import type { PortfolioContent } from './types';

export const portfolioContent: PortfolioContent = {
  hero: {
    name: "Eric Sia",
    title: "Senior Full-Stack Engineer",
    tagline: "Building scalable end-to-end systems and beautiful web experiences with modern technologies",
    location: "KL, Malaysia"
  },
  about: {
    summary: "Deliver enterprise-grade systems using React, Spring Boot, and AWS. Specialized in system modernization, microservices architecture, and cloud-native deployments. Proven track record in leading technical initiatives, driving platform migrations, and enabling international product expansion. Strong background in scalable backend design, DevOps automation, and production system stability.",
    highlights: [
      { number: "4", label: "Years Coding" },
      { number: "30+", label: "Projects Built" },
      { number: "10+", label: "Technologies" },
    ]
  },
  skills: {
    skills: [
      { name: "React.js", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "Angular", category: "Frontend" },
      { name: "Vue.js", category: "Frontend" },
      { name: "Progressive Web Apps", category: "Frontend" },
      { name: "Java", category: "Backend" },
      { name: "Spring Boot", category: "Backend" },
      { name: "Microservices", category: "Backend" },
      { name: "RESTful APIs", category: "Backend" },
      { name: "JPA Entity", category: "Backend" },
      { name: "ORM", category: "Backend" },
      { name: "MyBatis", category: "Backend" },
      { name: "MySQL", category: "Database" },
      { name: "PostgreSQL", category: "Database" },
      { name: "MSSQL", category: "Database" },
      { name: "SQLite", category: "Database" },
      { name: "Redis", category: "Database" },
      { name: "AWS", category: "Cloud & DevOps" },
      { name: "Docker", category: "Cloud & DevOps" },
      { name: "Kubernetes", category: "Cloud & DevOps" },
      { name: "CI/CD", category: "Cloud & DevOps" },
      { name: "Jenkins", category: "Cloud & DevOps" },
      { name: "GitHub Actions", category: "Cloud & DevOps" },
      { name: "Git", category: "Cloud & DevOps" },
      { name: "Python", category: "Programming" },
      { name: "R", category: "Programming" },
      { name: "Machine Learning", category: "Programming" },
      { name: "React Native", category: "Mobile" },
      { name: "Expo Go", category: "Mobile" },
      { name: "Kotlin", category: "Mobile" },
      { name: "Android Studio", category: "Mobile" },
    ]
  },
  experience: {
    experiences: [
      {
        company: "OpenMove AI Bhd",
        role: "Senior Executive – Full Stack Developer",
        duration: "2 Years",
        startDate: "2024-10",
        endDate: "Present",
        achievements: [
          "Built CommissionSuite enabling first international expansion to Thailand",
          "Led migration from WebSphere Java EE to React + Spring Boot + PostgreSQL",
          "Introduced Docker and AWS infrastructure for improved deployment scalability",
          "Delivered COO-led PoC securing customer approval and new business opportunities"
        ]
      },
      {
        company: "Plaza Premium Group",
        role: "Software Engineer",
        duration: "1.5 years",
        startDate: "2023-04",
        endDate: "2024-10",
        achievements: [
          "Fixed critical production issue in Smart Traveller mobile app (React Native)",
          "Migrated Smart Traveller Admin Portal from Angular 5 to latest Angular LTS",
          "Built serverless AWS API integration portal for internal and client developers",
          "Implemented Redis-based queue system on AWS EC2"
        ]
      },
      {
        company: "Matrixtudios",
        role: "IT Intern",
        duration: "6 months",
        startDate: "2022-04",
        endDate: "2022-09",
        achievements: [
          "Developed Next.js landing pages for marketing campaigns",
          "Implemented Zapier + Odoo automation for social media workflows",
          "Assisted team development and mentored new interns"
        ]
      }
    ]
  },
  projects: {
    projects: [
      {
        title: "新プル Group - Product Landing Platform",
        description: "Official landing website with custom domain showcasing developed applications with SEO-optimized responsive design.",
        technologies: ["Next.js", "Custom Domain", "SEO", "Responsive Design"],
        image: "/Simple-Group.png",
        imageAlt: "新プル Group landing platform screenshot",
        liveUrl: "https://shinpuru-group.com",
      },
      {
        title: "新プル Booth - iOS POS System",
        description: "Mobile POS system for event booth businesses with product management, order tracking, and premium subscription features.",
        technologies: ["React Native", "Expo Go", "iOS", "In-App Purchase"],
        image: "/images/project2.jpg",
        imageAlt: "新プル Booth POS system screenshot",
        liveUrl: "",
      },
      {
        title: "Ameiro 雨いろ - Weather App",
        description: "Real-time weather monitoring app with worldwide data integration and clean location-based forecast visualization.",
        technologies: ["Next.js", "Weather API", "REST", "Secret Management"],
        image: "/Ame-Iro.png",
        imageAlt: "Ameiro weather app screenshot",
        liveUrl: "https://ameiro-ruddy.vercel.app/",
      },
      {
        title: "Kiro Note 記録ノート - Todo App",
        description: "Productivity web app for task management with status tracking and responsive design for all devices.",
        technologies: ["Next.js", "State Management", "Local Storage", "Responsive UI"],
        image: "/Kiro-Note.png",
        imageAlt: "Kiro Note todo app screenshot",
        liveUrl: "https://kiro-note.vercel.app/",
      }
    ]
  },
  contact: {
    heading: "Let's work together",
    subheading: "I'm currently open to new opportunities and exciting projects",
    socialLinks: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/eric-sia-b0385a284/", icon: "linkedin" },
      { platform: "GitHub", url: "https://github.com/SiaDeLong", icon: "github" },
      { platform: "Email", url: "mailto:ericsiadelong@outlook.com", icon: "email" }
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
  }
};
