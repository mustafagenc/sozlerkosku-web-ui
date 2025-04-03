import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";
import tailwindTypography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [tailwindCssAnimate, tailwindTypography],
};
export default config;
