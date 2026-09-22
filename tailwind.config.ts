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
        baemin: {
          mint: '#0cefd3',
          'mint-hover': '#00d6bd',
          'mint-light': '#e6fdfa',
          dark: '#222222',
          muted: '#6c6d6f',
          panel: '#f6f6f6',
          surface: '#f3f4f5',
          border: '#a6a7a9',
        },
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
      },
      borderRadius: {
        'baemin': '12px',
      },
    },
  },
  plugins: [],
};

export default config;
