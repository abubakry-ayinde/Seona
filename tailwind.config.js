/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        sm: "320px", 
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      },
      width: {
        big: '200px',
        width: '50rem',
        medium: '450px',
        bigger: '550px',
        biggest: '700px',
        us: '1000px',
        most: '1200px',
        more: '1300px'
      },
      height: {
        height1: '300px',
        hebig: '450px',
        height2: '600px',
        height: '800px',
        height3: '900px',
        height4: '1200px'
      },
      gap: {
        gap1: '300',
        gap2: '400px',
        gap3: '500px'
      }
    },
  },
  plugins: [],
}