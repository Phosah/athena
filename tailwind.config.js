module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: {
            1: "#1B1B1D",
            2: "#8D8D8D",
            3: "#C4C4C4",
          },
          black: {
            1: "#101011",
          },
          green: {
            1: "#179942",
          },
          blue: {
            1: "#627EEA",
          },
          yellow: {
            1: "#F5A623",
          },
          red: {
            1: "#F12D28",
          },
        },
      },
    },
  },
  plugins: [],
};
