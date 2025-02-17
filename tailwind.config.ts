import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#89a809",
        secondary: "#F37D2B",
        footer: "#6c8738",
        product: "#FFEBB1",
        faq: "#D4F2FF",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        "2xl": "0",
      },
      screens: {
        "2xl": "1300px",
      },
    },
  },
  plugins: [],
};
export default config;
