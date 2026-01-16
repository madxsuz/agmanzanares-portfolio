/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
            DEFAULT: '#00331C',
            900: '#002213',
            800: '#004426',
        },
        cream: {
            DEFAULT: '#F4F4E0',
            50: '#FCFCF7',
            100: '#F8F8E7',
        },
        gold: {
            DEFAULT: '#FFC107',
            600: '#E0A800',
        },
        peach: {
            DEFAULT: '#FF8C6B',
        }
      },
      fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
