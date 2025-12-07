import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { categories, services } from "@/lib/services";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MBUrb - Assessoria em Planejamento Urbano e Arquitetura",
  description:
    "A MBUrb é uma empresa líder em assessoria de planejamento urbano e arquitetura, comprometida em criar cidades mais sustentáveis, funcionais e humanas.",
  keywords: [
    "Assessoria",
    "Serviço Público",
    "Setor Público",
    ...categories.map((c) => c.name),
    ...services.map((s) => s.name),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
