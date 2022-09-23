/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'srn-1': '1271px',
        'srn-2': '1168px',
        'srn-3': '1137px',
        'srn-4': '816px'
        
      },
      fontSize: {
        'tiny': '.735rem'
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
