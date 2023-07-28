/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter"],
      poppins: ["Poppins"],
    },
    colors: {
      pink: {
        1: "#BB1970",
        2: "#E845A7",
        3: "#DD5789",
      },
      yellow: "#FFD233",
      white: "#ffffff",
    },
  },
  plugins: [],
};
