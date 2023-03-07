/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bar': '#212121',
        'dark-base': '#181818',
        'dark-card': '#282828',
        'planexcon-red': {
          200: '#dc2626',
          500: '#c52f33',
        },
        'radix-switch': 'rgba(0,0,0,0.44)',
      },
      boxShadow: {
        'switch-root': '0 2px 10px rgba(0,0,0,0.14)',
        'switch-thumb': '0 2px 2px rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwind-scrollbar-hide'),
  ],
}
