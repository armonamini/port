import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hero: "#F7F5F2",
        projects: "#ECE7E1",
        experience: "#F2EFEA",
        footer: "#E3DED6",
        text: {
          primary: "#1F2933",
        },
        accent: "#3A5A5A",
        highlight: "#A2673F",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-cormorant-garamond)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
