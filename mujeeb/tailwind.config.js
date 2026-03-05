// tailwind.config.js
module.exports = {
  darkMode: 'class', // Correct setting for our dark mode switch
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // We will define custom animations here and call them in index.css
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in-down': 'fade-in-down 0.8s ease-out',
        'slide-in-right': 'slide-in-right 1.0s ease-out',
        'slide-in-left': 'slide-in-left 1.0s ease-out',
      },
    },
  },
  plugins: [],
}