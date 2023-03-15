/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',
      blue: {
        100: '#AEBED4',
        200: '#708AAE',
      },
      gray: {
        10: '#F2F3F7',
    },
  },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      boxShadow: {
        'neo': '-3px -3px 6px rgba(255, 255, 255, 0.8), 2px 2px 4px rgba(185, 204, 231, 0.8)',
        'inner-neo': 'inset -3px -3px 6px rgba(255, 255, 255, 0.8), inset 2px 2px 4px #B9CCE7',
        'neo-flat': 'inset 0px 0px 6px rgba(255, 255, 255, 0.8), inset 0px 0px 4px rgba(185, 204, 231, 0.8)',
        'check-neo': 'inset -3px -3px 6px rgba(255, 255, 255, 0.8), inset 2px 2px 8px #B9CCE7',
      }
    }
  },
  plugins: [],
}
