/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        bglight:"#DDE6ED",
        btnback:"#526D82",
        bhutdark:"#2d2b2b"
      },
      textColor:{
        txtcol:"#9DB2BF",
        txtcoldark:"#526D82",
        textcollight:"#DDE6ED",
        txtdark:"#27374D"
      }
    },
  },
  plugins: [],
}



