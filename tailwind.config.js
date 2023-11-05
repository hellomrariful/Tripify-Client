/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#2D68FF',
        descriptionColor: '#7F7F7F',
        backgroundColor: '#F4F9FF',
      },
      fontFamily: {
        heading: ['Fjalla One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

