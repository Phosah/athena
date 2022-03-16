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
            4: "#C3CFE2",
          },
          black: {
            1: "#101011",
          },
          green: {
            1: "#179942",
          },
          blue: {
            1: "#627EEA",
            2: "#89F7FE",
            3: "#66A6FF",
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
