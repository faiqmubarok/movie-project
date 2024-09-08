/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0f0f0f',
        'secondary': '#282828',
        'third' : '#9f9f9f',
        'accent': '#e50815'
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'bebas': ['Bebas Neue', 'cursive']
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

