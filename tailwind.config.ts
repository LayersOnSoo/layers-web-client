import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
  },
  plugins: [],
} satisfies Config;

export default config;
