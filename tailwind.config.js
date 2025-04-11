/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
           "spin-slow":"spin 3s linear infinite"
      },
      colors: {
        darkBrown: '#4B2E2E',
        lightBrown: '#A9746E',
        oliveGreen: '#556B2F',
        gold: '#FFD700',
        softBlue: '#7AB8F5',
        rose: '#F43F5E',
        midnight: '#121063',
        stone: '#78716c',
        lavender: '#B57EDC',
        teal: '#008080',
      },
    },
  },
  plugins: [require("daisyui")],
}


