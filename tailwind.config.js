/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        kiln: {
          paper: '#F6F7E5',
          paperDark: '#e4d8be',
          paperSoft: '#f3ead6',
          ink: '#080808',
          muted: '#a8a8a8',
          mint: '#5fa792',
          clay: '#c96f4a',
          navy: '#253f7c',
          gold: '#d8a63f',
        },
      },
      fontFamily: {
        display: ['var(--font-main)', 'Arial', 'sans-serif'],
        body: ['var(--font-main)', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        kiln: '3px 3px 0 #111111',
        'kiln-sm': '2px 2px 0 #111111',
      },
    },
  },
  plugins: [],
}

export default config
