"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface routeProps {
  label: string;
  url: string;
}

const routes: routeProps[] = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Projects", url: "/projects" },
  { label: "Contact", url: "/Contact" },
];

export const NavbarSection = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar if at the very top of the page
      if (currentScrollY < 50) {
        setIsVisible(true);
      }
      // If scrolling down, hide it
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      // If scrolling up, reveal it
      else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible ? 0 : -80,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full flex justify-center"
    >
      <Navbar
        classNames={{
          base: "bg-transparent max-w-fit",
          wrapper: [
            "bg-slate-900/90",
            "backdrop-blur-2xl",
            "border",
            "border-cyan-500/30",
            "shadow-[0_10px_30px_rgba(0,0,0,0.8)]",
            "rounded-full",
            "h-12",
            "my-4",
            "flex",
            "justify-center",
            "w-auto",
            "px-5",
          ],
          item: ["flex", "relative", "h-full", "items-center"],
        }}
        isBlurred={false}
      >
        <NavbarContent className="flex gap-2" justify="center">
          {routes.map((section: routeProps) => {
            const isActive = pathname === section.url;

            return (
              <NavbarItem key={section.url} isActive={isActive}>
                <Link
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-cyan-950/60 text-cyan-200 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                  }`}
                  href={section.url}
                >
                  {section.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
    </motion.div>
  );
};
