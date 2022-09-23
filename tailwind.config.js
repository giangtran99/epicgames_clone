/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'tiny': '.675rem'
      },
      width: {
        inherit: 'inherit'
      },
      height: {
        inherit: 'inherit'
      },
      maxWidth: {
        '4/5': '80%',
      },
      minWidth: {
        '4/5': '80%',
      }
    },
  },
  plugins: [],
}
