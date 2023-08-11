/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        canvas: {
          index0: "#171719",
          index1: "#212124",
          index2: "#1F1F22",
        },
        highlight: "#00FFFF",
        fg: {
          DEFAULT: "#FCFCFC",
          '065': "#FCFCFCa6",
          subtle: "#9898A6",
          hover: "#4C4E54",
          red: '#EF2F62',
          empty: '#C4C4C4'
        },
        action: {
          border: "#EBEBFFd",
        },
      },
    },
  },
}
