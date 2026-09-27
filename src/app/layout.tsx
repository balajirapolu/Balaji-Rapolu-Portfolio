import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import FloatingNavbar from '@/components/FloatingNavbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import CommandPaletteModal from '@/components/CommandPaletteModal';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Balaji Rapolu — Full-Stack Developer',
  description: 'Portfolio of Balaji Rapolu. Undergraduate CSE at SRM AP (GPA 9.20/10). Full-Stack developer specializing in Spring Boot, React, and PyTorch AI vision models.',
  keywords: ['Balaji Rapolu', 'Full-Stack Developer', 'Spring Boot', 'SRM University AP', 'React.js', 'PyTorch', 'Portfolio'],
  authors: [{ name: 'Balaji Rapolu' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-[#0D1526] text-[#E7E9EE] antialiased selection:bg-[#E8A33D] selection:text-[#0D1526] min-h-screen flex flex-col relative overflow-x-hidden font-sans">
        <CustomCursor />
        <FloatingNavbar />
        <main className="flex-1 w-full relative">
          {children}
        </main>
        <Footer />
        <CommandPaletteModal />
      </body>
    </html>
  );
}
