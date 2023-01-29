/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage:{
        "discoverCat": "url('/images/discoverCat.png')",
        "loupeIcon": "url('/images/loupeIcon.svg')",
      },
      screens:{
        "mds": {
          "raw": "(min-width: 900px)"
        }
      }
    }
  },
  plugins: []
}
