/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'tw-blue': '#1DA1F2',
        'tw-black': '#14171A',
        'tw-darkgray': '#657786',
        'tw-lightgray': '#AAB8C2',
        'tw-extralightgray': '#E1E8ED',
        'tw-extraextralightgray': '#F5F8FA',
      },
    },
  },
  plugins: [require('daisyui')],
};
