/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        discoverCat: "url('/images/discoverCat.png')",
        loupeIcon: "url('/images/loupeIcon.svg')"
      },
      colors:{
        "filled-level-bar": "#544439",
        "non-filled-level-bar": "#E0E0E0"
      },
      screens: {
        mds: {
          raw: '(min-width: 900px)'
        },
        '3xl': '1620px'
      }
    }
  },
  plugins: []
}
