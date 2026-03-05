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
        title: "E-Commerce Platform",
        description: "A modern e-commerce platform with real-time inventory management and seamless checkout experience",
        technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
        image: "/images/project1.jpg",
        imageAlt: "E-commerce platform screenshot",
        liveUrl: "https://",
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
  },
  metadata: {
    title: "Your Name - Senior Full-Stack Engineer",
    description: "Portfolio showcasing frontend development and design work",
    ogImage: "/images/og-image.jpg",
    url: "https://yourportfolio.com"
  }
};
