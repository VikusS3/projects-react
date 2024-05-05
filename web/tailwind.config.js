/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFFFFF',
          200: '#e0e0e0',
          300: '#9b9b9b',
        },
        accent: {
          100: '#FFD700',
          200: '#917800',
        },
        text: {
          100: '#FFFFFF',
          200: '#e0e0e0',
        },
        bg: {
          100: '#0F1626',
          200: '#1e2436',
          300: '#363c4e',
        },
      },
      boxShadow:{
        neon: '0 0 2px #FF00FF, 0 0 8px #00dfae, 0 0 20px #00dfae, 0 0 2px #FF00FF',
      },
    },
    plugins: [animations],
  },
};
