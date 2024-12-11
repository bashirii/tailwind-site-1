/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./build/**/*.html", "./build/js/*.js"],
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      // adding colors to the theme (example:) to use it <p class="text-papayawip-light"></p>
      colors: {
        papayawip: {
          light: "#fef4e4",
          default: "#ffefd5",
          dark: "#fee5bc",
        },
      },
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
      Keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
