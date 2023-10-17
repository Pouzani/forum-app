/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'zelijSignature': "url('./assets/images/zelijS.png')",
      },
      colors: {
        khder: '#1F4C24',
        kherwani: "#3A4A3E",
        gris: "#222222"
      },
      screens: {
        'xs': '480px',
      }
    },
  },
  plugins: [],
}