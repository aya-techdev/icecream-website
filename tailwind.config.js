/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        cream:    '#f9f5f0',
        sand:     '#fcf3da',
        blush:    '#fce8ee',
        rose:     '#d4748a',
        roseDark: '#b05570',
        mink:     '#f0ece0',
        dark:     '#04020e',
        darkpink: '#8e4f60',
        darkcard3: '#4505167a',
        darkcard2: '#44182aae',
        darkcard1: '#644a3b9c',
        heart :    '#2d0b00',
        vanilla:  '#3d24149c',
        buy : '#1d020b',
        water : '#410f23ae',
        
        chocolate : '#3b1003c9',
      },
      fontFamily: {
        serif:  ['"Playfair Display"', 'serif'],
        script: ['"Dancing Script"',   'cursive'],
        sans:   ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
