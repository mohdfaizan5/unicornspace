/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary: "#0180F5",
      secondary: "#121212",
      bg: "#F3F3F5",
      "bg-shade":"#808080",
    },
    fontFamily:{
      primary: "gilroy"
    }
  },
  plugins: [],
}