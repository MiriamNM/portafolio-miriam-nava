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
      yellow: {
        1: "#FFD233",
        2: "#FFD233",
        3: "#FBF2B1",
      },
      blue: {
        1: "#5990EE",
        2: "#10D7E2",
        3: "#5990EE",
        4: "#004E93",
      },
      white: "#ffffff",
      dark: "#1A1A1A",
      purple: "#9358F7",
      gray: "#636F9A",
      lila: "#C27ADD",
    },
  },
  plugins: [],
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
};
