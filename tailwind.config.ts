import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#020617",
        surface: "#020617",
        card: "#020617",
        accent: {
          DEFAULT: "#22c55e",
          soft: "#16a34a"
        }
      },
      boxShadow: {
        "soft": "0 18px 45px rgba(15, 23, 42, 0.75)"
      }
    }
  },
  plugins: []
};

export default config;

