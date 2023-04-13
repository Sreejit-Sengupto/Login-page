/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "shadow": "0px 0px 6px lime"
      }
    },
    // colors: {
    //   'green-primary': "#aaff00"
    // }
  },
  plugins: [],
}