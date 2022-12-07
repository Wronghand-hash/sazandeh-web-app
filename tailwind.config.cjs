/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
