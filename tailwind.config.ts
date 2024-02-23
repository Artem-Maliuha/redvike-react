import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '10px',
      base: '12px',
      xl: '16px',
    },
    fontWeight: {
      normal: '500',
      bold: '700',
    },
    colors: {
      primary: '#1A1A1E',
      white: '#FFFFFF',
      black: '#000000',
    },
    boxShadow: {
      hard: '2px 2px 0px 0px rgba(0,0,0,.6)',
    },
  },
  plugins: [],
}
export default config
