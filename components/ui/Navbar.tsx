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
    <nav aria-label="Main navigation" className="site-shell flex h-[68px] min-w-0 items-center justify-between gap-2 sm:h-[76px] sm:gap-4">
      <Link href="/" className="group flex shrink-0 items-center" aria-label="Sodiq Abdulsalam home">
        <span className="wordmark text-[13px] font-extrabold tracking-[.16em] text-[#17231c] sm:text-sm">
          SODIQ<span className="text-[#176b43]">.</span>
        </span>
      </Link>

      <div className="nav-rail flex min-w-0 items-center gap-0.5 rounded-full border border-[#e5eae5] bg-white/85 p-1 sm:gap-1">
        {routes.map((route) => {
          const active = pathname === route.url || (route.url !== "/" && pathname.startsWith(`${route.url}/`));
          return (
            <Link
              key={route.url}
              href={route.url}
              aria-current={active ? "page" : undefined}
              className={`whitespace-nowrap rounded-full px-2 py-2 text-[10px] font-semibold transition-colors sm:px-4 sm:text-xs ${active ? "nav-link-active" : "nav-link"}`}
            >
              {route.label}
            </Link>
          );
        })}
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <ThemeToggle />
        <a href="mailto:devyinka8380@gmail.com" className="hidden items-center gap-1.5 text-xs font-semibold text-[#176b43] transition hover:text-[#105234] lg:inline-flex">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
};
