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
  title: "Saespace Studio | Jasa Arsitektur & Desain Interior Modern",
  description: "Saespace Architecture, Interior Design & Build membantu mewujudkan hunian dan ruang usaha yang nyaman, estetik, dan fungsional dengan konsep modern.",
  keywords: ["arsitektur", "desain interior", "renovasi", "design & build", "arsitek jakarta", "arsitek indonesia", "saespace", "saespace studio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
