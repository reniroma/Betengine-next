"use client";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "BetEngine",
  description: "Smart betting analytics platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050509] text-slate-100">
        <Header />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
