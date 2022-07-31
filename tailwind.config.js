module.exports = {
  // mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'san-serif'],
    },
    extend: {
      keyframes: {
        slide: {
          '0%': {
            left: "-100px !important",
          },
          '100%': {
            left: "0 !important",
          }
        }
      },
      animation: {
        running: "slide .5s ease-in-out infinity"
      },
      backgroundImage: {
        'canvas-grid': "url('./assets/svg/canvas-grid.svg')",
      },
      backgroundSize: {
        '16': '64px'
      },
      spacing: {
        "18": "4.5rem"/* 72px */
      },
      colors: {
        "dark-gray": {
          30: "#ccc",
          50: "#828282",
          70: "#4a4a4a",
          80: "#383838",
          90: "#202020",
          100: "#181818"
        },
        "light-gray": {
          0: "#fdfdfd",
          5: "#fbfbfe",
          10: "#f1f1f1",
          15: "rgba(0, 0, 0, 0.05)",
          20: "#eaeaea",
          30: "#bec3c9",
          45: "#8d949e",
          70: "#606770",
          80: "#444950",
          90: "#303338",
          100: "#1c1e21"
        },
        "primary": {
          100: "#1D9BF0"
        }
      }
    },
  },
  plugins: [],
}
