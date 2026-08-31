import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated Indian couture palette. Gold is an accent only.
        burgundy: {
          DEFAULT: "#4A1221",
          deep: "#330C16",
          light: "#6E2A3D",
          soft: "#8A4156",
        },
        emerald: {
          DEFAULT: "#0E4F42",
          deep: "#08352B",
          light: "#1C6B55",
          soft: "#2E8A6E",
        },
        gold: {
          DEFAULT: "#B3894A",
          light: "#D6BC83",
          dark: "#8A6A2E",
        },
        ivory: {
          DEFAULT: "#F7F1E6",
          deep: "#EFE6D3",
          light: "#FBF7EF",
        },
        espresso: {
          DEFAULT: "#2A2019",
          light: "#4D4033",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1400px",
      },
      letterSpacing: {
        eyebrow: "0.34em",
      },
    },
  },
  plugins: [],
};

export default config;
