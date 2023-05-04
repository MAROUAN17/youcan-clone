/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",
            "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        body: ['Poppins'],
        secondary: ['Inter']
      },
      backgroundColor: {
        white: "#fff"
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

