const primaryColors = [
  {
    'primary-lighter': '#F7F9F9',
    'primary-light': '#DCE9E2',
    'primary': '#00856F',
    'primary-dark': '#00453A',
  },
  {
    'primary-lighter': '#FFF9F1',
    'primary-light': '#FFF4E6',
    'primary': '#E8590C',
    'primary-dark': '#B73705',
  },
  {
    'primary-lighter': '#F0F9FF',
    'primary-light': '#D0EBFF',
    'primary': '#1971C2',
    'primary-dark': '#0A4378',
  },
  {
    'primary-lighter': '#F3F0FF',
    'primary-light': '#E5DBFF',
    'primary': '#5F3DC4',
    'primary-dark': '#331983',
  },
  {
    'primary-lighter': '#FFF5F5',
    'primary-light': '#FFE3E3',
    'primary': '#C92A2A',
    'primary-dark': '#821515',
  }
]


module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins", "sans-serif"']
      },
      colors: {
        ...primaryColors[0],
        'gray-light': '#F7F9F9',
        'gray': '#384633',
        'gray-dark': '#061800'
      }
    },
  },
  plugins: [],
}
