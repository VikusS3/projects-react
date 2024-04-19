/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#6A00FF",
          200: "#a64aff",
          300: "#ffb1ff",
        },
        accent: {
          100: "#00E5FF",
          200: "#00829b",
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
    },
  },
  plugins: [],
};
