import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0c",
        coal: "#131315",
        line: "#26262a",
        bone: "#f2ede4",
        mute: "#9a968f",
        accent: "#e8b56b",
        rose: "#d9776b",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1320px" },
    },
  },
  plugins: [],
};
export default config;
