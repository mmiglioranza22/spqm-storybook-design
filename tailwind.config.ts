import {
  black,
  theme,
  currentColor,
  transparent,
  white,
} from "@/stories/tokens/theme";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sofia Sans Variable", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: theme.boxShadow, // rename in figma
      fontSize: theme.fontSize,
    },
    colors: {
      ...theme.colors,
      white,
      black,
      transparent,
      currentColor,
    },
  },
  plugins: [],
} satisfies Config;
