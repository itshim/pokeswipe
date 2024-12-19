import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      background: {
        DEFAULT: '#ffffff',
        dark: '#1a202c', // dark background color
      },
      text: {
        DEFAULT: '#333333',
        dark: '#f7fafc', // light text color for dark mode
      },
    },
  },
  plugins: [],
} satisfies Config;
