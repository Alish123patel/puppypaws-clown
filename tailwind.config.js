/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cocoa: {
          DEFAULT: '#2a170e',
          soft: '#5a3a28',
        },
        honey: {
          DEFAULT: '#f2be6b',
          soft: '#fbe3b4',
        },
        toffee: {
          DEFAULT: '#c2622b',
          deep: '#a24a1a',
          ink: '#8e3f15',
        },
        milk: {
          DEFAULT: '#fffdf8',
          cream: '#fbf7f0',
        },
        sky: {
          DEFAULT: '#bfddf5',
          deep: '#2f6e9e',
        },
        blush: {
          DEFAULT: '#f9cdbf',
        }
      },
      fontFamily: {
        plush: ['Fraunces', 'serif'],
        scrawl: ['"Shantell Sans"', 'cursive'],
        sans: ['Figtree', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(42, 23, 14, 0.06)',
        'soft-lg': '0 10px 30px -4px rgba(42, 23, 14, 0.1)',
        'elevated': '0 12px 36px -4px rgba(42, 23, 14, 0.15)',
      }
    },
  },
  plugins: [],
}
