module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  darkmode: 'class',
  content: [],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'san-serif'],
    },
    extend: {
      colors: {
        "dark-gray": {
          35: "#ccc",
          50: "#828282",
          70: "#4a4a4a",
          80: "#373737",
          90: "#202020",
          100: "#181818"
        },
        "light-gray": {
          0: "#f5f6f7",
          5: "#f2f3f5",
          10: "#ebedf0",
          20: "#dadde1",
          30: "#bec3c9",
          45: "#8d949e",
          70: "#606770",
          80: "#444950",
          90: "#303338",
          100: "#1c1e21"
        }
      }
    },
  },
  plugins: [],
}
