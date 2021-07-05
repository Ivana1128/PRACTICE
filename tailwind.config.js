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
        //sans: ['Roboto', 'sans-serif'],
        //serif: ['Fake Serif', 'serif'],
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
        'splash-pattern': "url('https://media.cmsmax.com/fqsmwuwheeyba5isyhksr/transparent-bg.png')",
        'blog-thumbnail': "url('https://i.ytimg.com/vi/6lt2JfJdGSY/maxresdefault.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
