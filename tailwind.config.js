/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#a21caf',
        secondary:'#71717a',
        dark: '#18181b',
      },
      screens: {
        '2xl': '1320px' 
      }
    },
  },
  plugins: [],
}

