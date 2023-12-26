import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      Primary: "#185CFF",
      Secondary: "#002B4E",
      Tertiary: "#F0F9FF",
      "Helper-blue-1": "#194060",
      "Helper-blue-2": "#607D94",
      "Helper-blue-3": "#C9DCEC",
      Black: "#292D33",
      White: "#FFFFFF",
      Grey: "#9497A1",
      Background: "#F1F6FA",
      Red: "#C14040",
    },
    extend: {
      boxShadow: {
        Button: "0px 12px 30px 0px rgba(24, 92, 255, 0.18);",
        Card1: "0px 2px 20px 17px rgba(24, 92, 255, 0.04);",
        Card2: "0px 12px 30px 17px rgba(24, 92, 255, 0.04);",
        Card3: "0px 4px 12px 0px rgba(12, 68, 204, 0.10);",
        DropDown:
          "0px 1px 2px 0px rgba(0, 43, 78, 0.30), 0px 2px 6px 0px rgba(0, 43, 78, 0.15);",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        opensans: ["var(--font-opensans)"],
      },
    },
  },
  plugins: [],
};
export default config;
