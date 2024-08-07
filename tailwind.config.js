/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#232323",
        purple: "#7F27FF",
        transparentGray: "rgba(78,78,78,0.5)",
        bluish: "#87CEEB",
        steal: "#4682B4",
        gold: "#fcaa11",
      },
      textColor: {
        purple: "#7F27FF",
        dark: "#232323",
        gold: "#fcaa11",
      },
      borderColor: {
        gold: "#fcaa11",
      },
      fontFamily: {
        title: ["Timmana", "sans-serif"],
        normal: ["Kanit", "sans-serif"],
        extra: ["Courgette", "cursive"],
      },
    },
  },
  plugins: [],
};
