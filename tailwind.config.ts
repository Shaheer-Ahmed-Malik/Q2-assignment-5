import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px', // mobile
        'md': '768px', // tablet
        'lg': '1024px', // desktop
        'xl': '1280px', // large desktop
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#A29875",
      },
      fontFamily: {
        rye: ['rye'],
        libre: ['libre bodoni'],
      },
    },
  },
  plugins: [],
};

export default config;
