/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        footer: "rgba(251, 242, 177, 0.49)",
      },
      backgroundImage: (theme) => ({
        "gradient-pink-yellow":
          "linear-gradient(90deg, rgba(232,69,167,1) 5%, rgba(255,210,51,1) 53%, rgba(221,87,137,1) 100%)",
        "gradient-purple-pink":
          "linear-gradient(90deg, rgba(105,100,222,1) 5%, rgba(252,166,233,1) 100%)",
        "gradient-wine-purple":
          "linear-gradient(90deg, rgba(210,64,116,1) 5%, rgba(101,24,180,1) 100%)",
        "gradient-blue-purple":
          "linear-gradient(90deg, rgba(147,88,247,1) 5%, rgba(16,215,226,1) 100%)",
        "gradient-lila-blond":
          "linear-gradient(90deg, rgba(194,122,221,1) 5%, rgba(229,172,124,1) 100%)",
      }),
      backgroundClip: {
        text: "text",
      },
      textColor: (theme) => ({
        transparent: "transparent",
      }),
    },
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
    screens: {
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [require("tailwindcss-gradients")],
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
};
