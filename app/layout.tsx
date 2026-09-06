import type { Metadata } from "next";
import "./globals.css";
import { NavbarSection } from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Salam Sodiq | devyinka",
  description: "Backend Systems, Mobile & Cyber Security Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-slate-300 font-sans relative">
        {/* Floating Navbar locked to the top center */}
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
          <div className="pointer-events-auto">
            <NavbarSection />
          </div>
        </header>

        {/* Main Content with top padding so it clears the fixed navbar */}
        <main className="pt-28">{children}</main>
      </body>
    </html>
  );
}
