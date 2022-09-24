/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'bp-1': {"max":'1137px'},
        'bp-2':{"max":'903px'},
        'bp-3':{"max":'961px'},
        'mobile':{"max":'841px'}
        
      },
      fontSize: {
        'tiny': '.755rem'
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
