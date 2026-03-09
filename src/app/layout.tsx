import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eric Sia - Senior Full-Stack Engineer | React, Spring Boot & AWS Expert",
  description: "Senior Full-Stack Engineer specializing in React, Next.js, Spring Boot, and AWS. 4+ years building scalable enterprise systems, microservices architecture, and cloud-native applications. Based in KL, Malaysia.",
  keywords: [
    "Eric Sia",
    "Full-Stack Engineer",
    "Senior Software Engineer",
    "React Developer",
    "Spring Boot Developer",
    "AWS Cloud Engineer",
    "Next.js",
    "Microservices",
    "Java Developer",
    "React Native",
    "DevOps",
    "Kubernetes",
    "Docker",
    "Malaysia Developer",
    "Kuala Lumpur",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Eric Sia" }],
  creator: "Eric Sia",
  publisher: "Eric Sia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eric-sia-portfolio.vercel.app",
    siteName: "Eric Sia - Portfolio",
    title: "Eric Sia - Senior Full-Stack Engineer | React, Spring Boot & AWS",
    description: "Senior Full-Stack Engineer with 4+ years experience building scalable enterprise systems using React, Spring Boot, and AWS. Specialized in microservices, cloud architecture, and system modernization.",
    images: [
      {
        url: "/Profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Eric Sia - Senior Full-Stack Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Sia - Senior Full-Stack Engineer",
    description: "Building scalable end-to-end systems with React, Spring Boot & AWS. 4+ years experience in enterprise development.",
    images: ["/Profile.jpeg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://eric-sia-portfolio.vercel.app"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
