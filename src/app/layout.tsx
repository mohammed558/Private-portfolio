import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TabTitleHandler from "@/components/TabTitleHandler";

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
  description: "Mohammed Arshad, a passionate full-stack developer specializing in modern web technologies, React, Next.js, and creating exceptional digital experiences.",
  keywords: ["portfolio", "developer", "full-stack", "react", "nextjs", "typescript", "web development"],
  authors: [{ name: "Mohammed Arshad" }],
  creator: "Mohammed Arshad",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='5' cy='6' r='3'/><path d='M12 6h5a2 2 0 0 1 2 2v7'/><path d='m15 9-3-3 3-3'/><circle cx='19' cy='18' r='3'/><path d='M12 18H7a2 2 0 0 1-2-2V9'/><path d='m9 15 3 3-3 3'/></svg>",
    shortcut: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='5' cy='6' r='3'/><path d='M12 6h5a2 2 0 0 1 2 2v7'/><path d='m15 9-3-3 3-3'/><circle cx='19' cy='18' r='3'/><path d='M12 18H7a2 2 0 0 1-2-2V9'/><path d='m9 15 3 3-3 3'/></svg>",
    apple: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='5' cy='6' r='3'/><path d='M12 6h5a2 2 0 0 1 2 2v7'/><path d='m15 9-3-3 3-3'/><circle cx='19' cy='18' r='3'/><path d='M12 18H7a2 2 0 0 1-2-2V9'/><path d='m9 15 3 3-3 3'/></svg>",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://MohammedArshad.dev",
    title: "Mohammed Arshad - Full Stack Developer",
    description: "Portfolio of Mohammed Arshad, a passionate full-stack developer specializing in modern web technologies.",
    siteName: "Mohammed Arshad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Arshad - Full Stack Developer",
    description: "Portfolio of Mohammed Arshad, a passionate full-stack developer specializing in modern web technologies.",
    creator: "@MohammedArshad",
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
        <TabTitleHandler />
        {children}
      </body>
    </html>
  );
}
