module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          400: 'hsl(0, 0%, 59%)',
          800: 'hsl(0, 0%, 17%)',
        },
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'location-pattern': 'url(src/assets/pattern-bg.png)',
      },
    },
  },
  plugins: [],
};
