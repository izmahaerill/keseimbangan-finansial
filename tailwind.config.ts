import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
    lineHeight: {
      "extra-loose": "1.5",
      "12": "4rem",
    },
    colors: {
      primary: "#A900F0",
      secondary: "#FFCC00",
      anjirr: "#161616",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
});
export default config;
