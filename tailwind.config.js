/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f8faf6',
          100: '#f0f5eb',
          200: '#e1ebd7',
          300: '#c8dbb8',
          400: '#a8d5ba',
          500: '#6b9f4d',
          600: '#4a7c2c',
          700: '#2d5016',
          800: '#1e3610',
          900: '#0f1b08',
        },
      },
    },
  },
  plugins: [],
}