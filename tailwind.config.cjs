/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite',
      },
      colors: {
        slate: 'hsl(0deg 0% 10%)',
        emerald: 'rgb(208, 179, 73)',
      },
      fontFamily: {
        retro: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
