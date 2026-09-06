import type { Metadata } from "next";
import "./globals.css";

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
      {/* Removed the Inter font, using standard Tailwind fonts instead */}
      <body className="bg-[#0a0a0a] text-slate-300 font-sans">{children}</body>
    </html>
  );
}
