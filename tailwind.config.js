/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        inter: ['InterVariable', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        military: ['"Black Ops One"', 'sans-serif']
      },
    },
  },
  plugins: [],
}