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
            5: "#28282E",
            6: "#F2F4F7",
            7: "#CACACA",
          },
          black: {
            1: "#101011",
            2: "#171717",
          },
          green: {
            1: "#179942",
            2: "#009F57",
            3: "#3EADCF",
            4: "#50AF95",
            5: "#1DD736",
          },
          blue: {
            1: "#627EEA",
            2: "#89F7FE",
            3: "#66A6FF",
            4: "#005BEA",
            5: "#00C6FB",
            6: "#001540",
            7: "#A1C4FD",
            8: "#C2E9FB",
          },
          yellow: {
            1: "#F5A623",
            2: "#F0B90B",
          },
          red: {
            1: "#F12D28",
            2: "#FC0140",
          },
          purple: {
            1: "#8247E5",
          },
          orange: {
            1: "#F8A035",
          },
        },
      },
      fontFamily: {
        sora: ["Sora", "sans serif"],
      },
    },
  },
  plugins: [],
};
