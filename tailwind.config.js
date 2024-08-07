/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#232323",
        purple: "#7F27FF",
        transparentGray: "rgba(78,78,78,0.5)",
      },
      textColor: {
        purple: "#7F27FF",
        dark: "#232323",
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
