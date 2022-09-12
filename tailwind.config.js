/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        beige: '#F9F6F0',
        violet: '#7500D1',
        lightViolet: '#A32EFF',
        grey: '#696969',
        black: '#0A0708'
      }
    },
  },
  plugins: [],
}
