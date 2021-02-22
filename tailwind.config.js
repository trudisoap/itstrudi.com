module.exports = {
  purge: {
      enabled: true,
      content: [
        './_layouts/*.html',
        './index.md',
      ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
