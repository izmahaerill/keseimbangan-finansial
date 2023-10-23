import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");


const config: Config = withMT ({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      primary: 'text-purple-700',
      secondary: 'bg-purple-700'
    },
  },
  plugins: [],
})
export default config
