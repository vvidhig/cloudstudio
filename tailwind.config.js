/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7B7FC4",
        dark: "#0a0a0a",
        cream: "#F5F0DC",
      },
      fontFamily: {
        archivo: ["\"Archivo Black\"", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};