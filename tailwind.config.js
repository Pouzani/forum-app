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
      },
      screens: {
        'xs': '480px',
      }
    },
  },
  plugins: [],
}