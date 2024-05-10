/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFC107",
          200: "#dda400",
          300: "#916400",
        },
        accent: {
          100: "#00BCD4",
          200: "#005e74",
        },
        text: {
          100: "#FFFFFF",
          200: "#9c9c9c",
        },
        bg: {
          100: "#0B0F2B",
          200: "#1a1e3b",
          300: "#333554",
        },
      },
    },
  },
  plugins: [],
};
