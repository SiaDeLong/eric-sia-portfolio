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
  title:
    "Eric Sia - Senior Full-Stack Engineer | React, Spring Boot & AWS Expert",
  description:
    "Senior Full-Stack Engineer specializing in React, Next.js, Spring Boot, and AWS. 4+ years building scalable enterprise systems, microservices architecture, and cloud-native applications. Based in KL, Malaysia.",
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
    "Software Engineer Portfolio",
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
    description:
      "Senior Full-Stack Engineer with 4+ years experience building scalable enterprise systems using React, Spring Boot, and AWS. Specialized in microservices, cloud architecture, and system modernization.",
    images: [
      {
        url: "/Profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Eric Sia - Senior Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Sia - Senior Full-Stack Engineer",
    description:
      "Building scalable end-to-end systems with React, Spring Boot & AWS. 4+ years experience in enterprise development.",
    images: ["/Profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://eric-sia-portfolio.vercel.app",
  },
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global background — fixed, behind everything */}
        <div className="-z-10 fixed inset-0 overflow-hidden" aria-hidden="true">
          {/* Base dark */}
          <div className="absolute inset-0 bg-dark-bg" />

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: `radial-gradient(circle, #7c3aed 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Top-left purple orb */}
          <div
            className="-top-40 -left-40 absolute opacity-20 rounded-full w-[480px] sm:w-[640px] h-[480px] sm:h-[640px]"
            style={{
              background:
                "radial-gradient(circle, #7c3aed 0%, #4c1d95 40%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Top-right blue orb */}
          <div
            className="-top-20 -right-20 absolute opacity-15 rounded-full w-[360px] sm:w-[500px] h-[360px] sm:h-[500px]"
            style={{
              background:
                "radial-gradient(circle, #2563eb 0%, #1e3a8a 40%, transparent 70%)",
              filter: "blur(70px)",
            }}
          />

          {/* Center-left mid-page accent */}
          <div
            className="top-[45%] -left-32 absolute opacity-10 rounded-full w-[300px] sm:w-[420px] h-[300px] sm:h-[420px]"
            style={{
              background:
                "radial-gradient(circle, #a78bfa 0%, #7c3aed 50%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          {/* Bottom-right accent */}
          <div
            className="-right-32 -bottom-32 absolute opacity-15 rounded-full w-[400px] sm:w-[560px] h-[400px] sm:h-[560px]"
            style={{
              background:
                "radial-gradient(circle, #7c3aed 0%, #2563eb 50%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          {/* Horizontal scan line — subtle tech feel */}
          <div
            className="top-0 absolute inset-x-0 opacity-30 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #7c3aed 30%, #a78bfa 50%, #7c3aed 70%, transparent 100%)",
            }}
          />

          {/* Vignette overlay to keep edges dark */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, #0a0a0a 100%)",
            }}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
