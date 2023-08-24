/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
       background: '#e6e6e6',
       primary: '#ffc93c',
       hover: '#e6b137',
      },
    },
  },
  plugins: [],
}

