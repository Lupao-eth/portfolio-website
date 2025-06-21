import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";  // <-- Import Navbar here
import { ThemeProvider } from './context/ThemeContext';

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A sample portfolio built with Next.js + Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ThemeProvider> {/* Wrap your content with the ThemeProvider */}
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
