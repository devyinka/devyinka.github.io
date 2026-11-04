"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const isDark = saved === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("portfolio-theme", next ? "dark" : "light");
    setDark(next);
  };

  return (
    <button type="button" onClick={toggleTheme} className="theme-toggle" aria-label={`Switch to ${dark ? "light" : "dark"} theme`}>
      <span aria-hidden="true">{dark ? "☼" : "☾"}</span>
      <span className="hidden sm:inline">{dark ? "Light" : "Dark"}</span>
    </button>
  );
}
