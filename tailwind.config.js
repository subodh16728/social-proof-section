/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    
    extend: {
      colors: {
        'very-dark-magenta': 'hsl(300, 43%, 22%)',
        'dark-grayish-magenta': 'hsl(300, 43%, 22%)',
        'light-grayish-magenta': 'hsl(300, 43%, 22%, 0.6)',
        'soft-pink': 'hsl(333, 80%, 67%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'text-15': '15px'
      },
      borderRadius: {
        'circle': '50%',
      },
      spacing: {
        '35': '34%',
        '38': '39%'
      },
    },
  },
  plugins: [],
}

