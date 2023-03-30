/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#a855f7',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'gray': {
        100: '#f3f4f6',
        400: '#9ca3af',
        600: '#4b5563',
        800: '#1f2937',
        900: '#F6F8F8',
        500: '#E9E9EB',
      },
    },
    extend: {
      backgroundImage: {
        'hero': "url('../public/assests/bg-2.svg')",
        'hero2':"url('../public/assests/bg-1.svg')",
      },
    },
    
  },
  plugins: [],
}
