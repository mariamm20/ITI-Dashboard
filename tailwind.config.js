/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary' : "#e8a526",
        'secondary':"#333333"
      },
      backgroundImage: {
        'home-background':"url(../dist/bg.jpg)",
        'dashboard-background' : "url(../dist/img/bg2.jpg)"
      },
      fontSize: {
        header: ['60px', '5.75rem'],
      }
    },
  },
  plugins: [],
}

