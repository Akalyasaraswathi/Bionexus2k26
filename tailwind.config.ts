import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#070819",
        deep: "#0d1030",
        panel: "#12153a",
        violet: "#7c5cff",
        "violet-dim": "#4a3aa8",
        cyan: "#2be8cf",
        coat: "#eef0ff",
        "text-main": "#e9e7fb",
        "text-dim": "#9a94c4",
        line: "rgba(154,148,196,0.16)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
