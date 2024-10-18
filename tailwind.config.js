import { nextui } from "@nextui-org/theme";
import { siteConfig } from "./config/site";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        ProximaNova: ["Proxima Nova, sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: siteConfig.siteColors.primary,
            secondary: siteConfig.siteColors.secondary,
            secondaryBlue: "#204ECF",
            bgPrimary: siteConfig.siteColors.bgPrimary,
            bgPrimaryFaint: siteConfig.siteColors.bgPrimaryFaint,
          },
        },
        dark: {
          colors: {
            primary: siteConfig.siteColors.primary,
            secondary: siteConfig.siteColors.secondary,
            secondaryBlue: "#204ECF",
            bgPrimary: siteConfig.siteColors.bgPrimary,
            bgPrimaryFaint: siteConfig.siteColors.bgPrimaryFaint,
          },
        },
      },
    }),
  ],
};
