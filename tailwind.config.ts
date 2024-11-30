import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#adb8ff",
          "100": "#8fa0ff",
          "200": "#7089ff",
          "300": "#4d72ff",
          "400": "#3365ff",
          "500": "#185cff",
          "600": "#0054f4",
          "700": "#0047e5",
          "800": "#0034cb",
          "900": "#0022b1",
          "950": "#001398",
        },
        secondary: {
          "50": "#657faa",
          "100": "#4e6992",
          "200": "#37537a",
          "300": "#1f3f64",
          "400": "#0e3357",
          "500": "#002b4e",
          "600": "#002446",
          "700": "#001939",
          "800": "#000026",
          "900": "#000015",
          "950": "#000000",
        },
        // primary: "#185CFF",
        // Secondary: "#002B4E",
        Tertiary: "#F0F9FF",
        "Helper-blue-1": "#194060",
        "Helper-blue-2": "#607D94",
        "Helper-blue-3": "#C9DCEC",
        Black: "#292D33",
        Grey: "#9497A1",
        Background: "#F1F6FA",
        Red: "#C14040",
        transparent: "transparent",
      },
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
