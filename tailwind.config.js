module.exports = {
  purge: ["./dist/**/*.html"],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px',
    },
    extend: {
      fontFamily: {
        'sans': ['Raleway', 'sans-serif'],
        'serif': ['Roboto Slab', 'serif'],
        'relaway': ['Raleway'],
      },
      container: {
        padding: '15px',
        center: true,
      },
      colors: {
        //primary: '#aa2249',
        //secondary: '#771833',
      },
      backgroundImage: theme => ({
        'splash-pattern': "url('https://media.cmsmax.com/onciqs68ghhnvupuxzbav/beaver-creek-mini-storage.jpeg')",
        'hero-pattern': "url('https://media.cmsmax.com/onciqs68ghhnvupuxzbav/call-to-action.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
