/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '1024px',
          'xl': '1440px',
         
      }
  },
    fontFamily:{
      'nunito': "'Nunito Sans', sans-serif"
    },
    fontWeight:{
      light: 300,
      semibold: 600,
      extrabold: 800
    },
    extend: {
      colors:{
        'dark-mode-elements': 'hsl(209,23%,22%)',
        'dark-mode-bg': 'hsl(207, 26%, 17%)',
        'light-mode-text': 'hsl(200, 15%, 8%)',
        'light-mode-input': 'hsl(0, 0%, 52%)',
        'light-mode-bg': 'hsl(0, 0%, 98%)',
        'white': 'hsl(0,0%,100%)',
      }
    },
  },
  plugins: [],
}
