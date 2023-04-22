/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        success: '#3CBCB4'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        graphik: ["Graphik", 'sans-serif']
      },
      boxShadow: {
        header: "-1px -1px 3px #FFFFFF, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);",
        'button-sm': '-1px -1px 3px #FFFFFF, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4)',
        'button-lg': '-5px 5px 10px rgba(222, 222, 222, 0.2), 5px -5px 10px rgba(222, 222, 222, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(222, 222, 222, 0.9)',
        'button-inset': 'inset -2px 2px 4px rgba(212, 212, 212, 0.2), inset 2px -2px 4px rgba(212, 212, 212, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.9), inset 2px 2px 5px rgba(212, 212, 212, 0.9)',
        'product': 'inset -2px 2px 4px rgba(220, 220, 220, 0.2), inset 2px -2px 4px rgba(220, 220, 220, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.9), inset 2px 2px 5px rgba(220, 220, 220, 0.9)',
        'button-add': '-5px 5px 10px rgba(221, 221, 224, 0.2), 5px -5px 10px rgba(221, 221, 224, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(221, 221, 224, 0.9)',
        'button-order': '-5px 5px 10px rgba(205, 205, 205, 0.2), 5px -5px 10px rgba(205, 205, 205, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(205, 205, 205, 0.9)',
        'order': 'inset -3px -3px 7px #FFFFFF, inset 2px 2px 5px rgba(174, 174, 192, 0.4)'
      },
      animation: {
        zoom: 'zoom 0.2s linear 1',
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        }
      }
    },
  },
  plugins: [],
};
