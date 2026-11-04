"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const routes = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Projects", url: "/projects" },
  { label: "Contact", url: "/Contact" },
];

export const NavbarSection = () => {
  const pathname = usePathname();
  return (
    <nav aria-label="Main navigation" className="site-shell flex h-[72px] items-center justify-between">
      <Link href="/" className="flex items-center gap-3" aria-label="Salam Sodiq home">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#176b43] text-sm font-bold tracking-tight text-white">SS</span>
        <span className="text-sm font-bold tracking-tight text-[#17231c]">SALAM SODIQ<span className="ml-1 text-[#176b43]">.</span></span>
      </Link>
      <div className="flex items-center gap-1 rounded-full border border-[#e5eae5] bg-white p-1">
        {routes.map((route) => {
          const active = pathname === route.url;
          return (
            <Link key={route.url} href={route.url}
              aria-current={active ? "page" : undefined}
              className={`rounded-full px-3 py-2 text-[11px] font-semibold sm:px-4 sm:text-xs ${active ? "nav-link-active" : "nav-link"}`}>
              {route.label}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <a href="mailto:devyinka8380@gmail.com" className="hidden items-center gap-2 text-xs font-semibold text-[#176b43] sm:inline-flex">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
};
