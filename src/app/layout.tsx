import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Arshad - Full Stack Developer",
  description: "Portfolio of Mohammed Arshad, a passionate full-stack developer specializing in modern web technologies, React, Next.js, and creating exceptional digital experiences.",
  keywords: ["portfolio", "developer", "full-stack", "react", "nextjs", "typescript", "web development"],
  authors: [{ name: "Mohammed Arshad" }],
  creator: "Mohammed Arshad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    title: "Mohammed Arshad - Full Stack Developer",
    description: "Portfolio of Mohammed Arshad, a passionate full-stack developer specializing in modern web technologies.",
    siteName: "Mohammed Arshad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Arshad - Full Stack Developer",
    description: "Portfolio of Mohammed Arshad, a passionate full-stack developer specializing in modern web technologies.",
    creator: "@johndoe",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
