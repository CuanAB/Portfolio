import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      colors: {
        /* Dark theme */
        bg:        { DEFAULT: "#090E1A", card: "#0F1629", card2: "#141B30" },
        accent:    { DEFAULT: "#4F8EF7", 2: "#A78BFA" },
        green:     "#34D399",
        amber:     "#FBBF24",
      },
      animation: {
        "pulse-slow": "pulse 6s ease-in-out infinite alternate",
        "blink":      "blink 2s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
