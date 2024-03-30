module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require("tw-elements/plugin.cjs")],
  darkMode: "class"
};