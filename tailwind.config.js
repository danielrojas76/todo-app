/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (_) => ({
        'custom-background':"url('./src/assets/pexels-alpography-14441193.png')"
      })
    },
  },
  plugins: [],
}

