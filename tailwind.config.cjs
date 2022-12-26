/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      height: {
        rem26: "26rem",
        dialog: "32rem",
        rem33: "33rem",
        bg: "45rem",
        carousel: "38rem",
      },
      width: {
        carousel: "50rem",
        textArea: "38rem",
        blog: "30rem",
      },
      fontFamily: {
        mainFont: ["LaleZar"],
        SultanFont: ["SultanFont"],
      },
      fontSize: {
        "10xl": "14rem",
      },
    },
  },
  screens: {
    xs: { min: "0px", max: "767px" },
    sm: { min: "768px", max: "991px" },
    md: { min: "992px", max: "1199px" },
    lg: { min: "1200px" },
  },
  colors: {
      // Build your palette here
      transparent: "transparent",
    
      white: colors.white,
      black: colors.black,
      gray: colors.neutral,
      LightBlue: colors.sky,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      blueGray: colors.slate,
      Lime: colors.lime,
      Fuchsia: colors.fuchsia,
      purple: colors.purple,
      green: colors.green,
      pink: colors.pink,
      Rose: colors.rose,
      Indigo: colors.indigo,
      Amber: colors.amber,
      Cyan: colors.cyan,
      Emerald: colors.emerald,
      Sky: colors.sky,
    },
  plugins: [],
};
