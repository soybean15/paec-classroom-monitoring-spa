/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '128': '30rem',
        '132':'40rem'
      }
    },
    fontSize:{
      'xxs':'0.5rem'

    }
  },
  plugins: [require("daisyui")],
}

