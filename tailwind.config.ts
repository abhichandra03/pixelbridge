import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'radial-gradient': 'radial-gradient(circle 500px at 30%, var(--tw-gradient-stops))',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      rotate:{
        '8': '8deg',
        '178': '178deg',
        '4': '4deg'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("tailwind-gradient-mask-image"),
    require('@pyncz/tailwind-mask-image')

  ],
};
export default config;
