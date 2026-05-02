import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        notic:     '#1D978E',
        'notic-dark':  '#0E706A',
        'notic-mid':   '#3DBDB4',
        'notic-light': '#5DCFC7',
        'notic-pale':  '#E6F7F6',
        'notic-line':  '#A8E0DC',
        sand:      '#F7F4EF',
        ink: {
          DEFAULT: '#1A1A18',
          soft:    '#4A4A45',
          mute:    '#8A8A82',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
export default config
