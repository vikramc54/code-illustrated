import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "transparent": "transparent",
        "current": "currentColor",
        "white": "#FFF",
        "black": "#000",
        "first": "rgb(var(--color-first) / <alpha-value>)",
        "second": "rgb(var(--color-second) / <alpha-value>)",
        "third": "rgb(var(--color-third) / <alpha-value>)",
        "fourth": "rgb(var(--color-fourth) / <alpha-value>)",
        "fifth": "rgb(var(--color-fifth) / <alpha-value>)",
        "primary": "rgb(var(--color-primary) / <alpha-value>)",
        "secondary": "rgb(var(--color-secondary) / <alpha-value>)",
      }
    },
  },
  plugins: [],
};
export default config;
