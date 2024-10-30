// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Nunito Sans','sans-serif'],
      },
      fontWeight:{
        regular:400,
        bold:700,
      },
      backgroundImage :{
        'custom-gradient':'linear-gradient(to right, #571158, #8D348E)',
      }
    },
  },
  plugins: [],
}
