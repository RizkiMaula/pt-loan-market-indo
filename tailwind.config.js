/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        biruLaut: '#17A9E2',
        abuJudul: '#4F5051',
        abuNama: '#646567',
      },
    },
  },
  plugins: [],
};
