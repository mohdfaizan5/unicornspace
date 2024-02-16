/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161618"

      },
      fontFamily:{
        "satori-300": "satori-light",
        "satori": "satori",
        "satori-900": "satori-black",
        "satori-700": "satori-bold",
        "satori-500": "satori-medium",
      }
    },
  },
  plugins: [],
};
