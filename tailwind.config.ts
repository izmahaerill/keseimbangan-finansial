import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
