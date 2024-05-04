/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#00FFCC",
          200: "#00dfae",
          300: "#00986d",
        },
        accent: {
          100: "#FF00FF",
          200: "#ffd6ff",
        },
        text: {
          100: "#FFFFFF",
          200: "#e0e0e0",
        },
        bg: {
          100: "#1A1A1A",
          200: "#292929",
          300: "#404040",
        },
      },
      boxShadow:{
        neon: '0 0 2px #FF00FF, 0 0 8px #00dfae, 0 0 20px #00dfae, 0 0 2px #FF00FF',
      },
    },
    plugins: [animations],
  },
};
