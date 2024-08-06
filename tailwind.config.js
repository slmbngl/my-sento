/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-texture': "url('https://sento.com.tr/wp-content/uploads/2024/02/christin-hume-hBuwVLcYTnA-unsplash-scaled.jpg')",
      },
      colors: {
        'sento': '#e61111',
        'sento-gray': '#E0E0E0',
        'sento-sgray': '#EFF1F2'
      },
      fontSize: {
        'xs': '0.75rem', // 12px
        'sm': '0.875rem', // 14px
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem', // 60px
        '7xl': '4.5rem', // 72px
        '8xl': '6rem', // 96px
        '9xl': '8rem', // 128px
      },
      fontFamily: {
        qubi: ['Libre Franklin', 'sans-serif']
      },
      height:{
        cst: '512px',
        custom: '540px',
        customtwo: '796px',
        active:'470px'
      },
      width:{
        cst:'450px',
        active:'470px',
        active2:'360px'
      },
      margin:{
        cst:'450px',
        active:'470px'
      },
      transitionDuration:{
        transdur: '5000ms'
      }
    },
  },
  plugins: [],
}

