/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      aeonik: ["Aeonik", "sans-serif"],
    },
    extend: {
      colors: {
        beige: "#FFF5E4",
      },
    },
  },
  plugins: [require("daisyui")],
};
