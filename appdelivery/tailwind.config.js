/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/screens/*.tsx',
    './src/components/*.tsx',
  ],
  theme: {
    extend: {
     colors: {
      background: '#e6e6e6',
      primary: '#ffc93c',
      hover: '#e6b137',
     }
    },
  },
  plugins: [],
}

