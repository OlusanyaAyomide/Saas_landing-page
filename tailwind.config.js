/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "brand-purple": "#AE67FA",
        "brand-red": "#F49867",
        "brand-blue": "#3E4581",
        basecolor: "#FCFCFF",
      },
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
        sm: "600px",
        lg: "1130px",
        xl: "1300px",
      },
    },
  },
  plugins: [],
};
