import type { Metadata } from "next";
import "./globals.css";
import { NavbarSection } from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Salam Sodiq | Software Engineer",
  description:
    "Salam Sodiq is a software engineer building web applications, mobile products, backend systems and connected solutions.",
  metadataBase: new URL("https://salamsodiq.me"),
  openGraph: {
    title: "Salam Sodiq | Software Engineer",
    description: "Building useful software across web, mobile and connected systems.",
    url: "https://salamsodiq.me",
    siteName: "Salam Sodiq",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-[#e8ede8]/90 bg-[#fbfcfa]/90 backdrop-blur-xl">
          <NavbarSection />
        </header>
        <main>{children}</main>
        <footer className="border-t border-[#e5eae5]">
          <div className="site-shell flex flex-col gap-3 py-8 text-xs text-[#758078] sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Salam Sodiq. Built with intention.</span>
            <span>Software engineering · Web · Mobile · Systems</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
