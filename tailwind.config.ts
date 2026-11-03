import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/theme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: "#e9fbf5",
          100: "#c9f4e7",
          200: "#99e8d2",
          300: "#65d6b7",
          400: "#2fbd98",
          500: "#08745f",
          600: "#076550",
          700: "#075343",
          800: "#064337",
          900: "#05362d",
          950: "#03251f",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
