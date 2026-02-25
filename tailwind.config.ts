import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#FDFBF7",
          100: "#F5F0E8",
          200: "#EDE7D9",
          300: "#D4C5A9",
          400: "#D4A574",
        },
        ink: {
          900: "#1A1A1A",
          700: "#4A4A4A",
          500: "#6B6B6B",
        },
        classified: {
          red: "#C41E1E",
          darkred: "#8B1414",
          brightred: "#E63946",
        },
        dark: {
          900: "#1C1C1E",
          800: "#2C2C2E",
          700: "#3A3A3C",
          600: "#4A4A4C",
        },
      },
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        body: ["Source Serif 4", "Crimson Pro", "serif"],
        mono: ["JetBrains Mono", "IBM Plex Mono", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "stamp": "stamp 0.3s ease-out forwards",
        "typewriter": "typewriter 2s steps(40) forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
        "unfold": "unfold 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
