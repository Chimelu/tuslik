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
          navy: "#2B264C",
          gold: "#D4AF37",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;

