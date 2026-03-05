import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark system
        'b-black': '#0E0E0E',
        'b-ink':   '#1A1A1A',
        // Light system
        'b-off':   '#F4F2EE',
        'b-stone': '#F0EBE3',
        'b-white': '#FFFFFF',
        // Sienna accent
        'b-sie':   '#C06A2D',
        'b-sie-dk':'#B85020',
        'b-sie-lt':'#D86830',
        // Neutrals
        'b-mid':   '#7A7874',
        'b-lgt':   '#C8C5C0',
        'b-rule':  '#E8E4DE',
        // Brand (logo only)
        'b-brand-primary':   '#F27122',
        'b-brand-secondary': '#F6921E',
        'b-brand-tertiary':  '#FAAF40',
        'b-brand-gray':      '#58595B',
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'body':    ['DM Sans', 'system-ui', 'sans-serif'],
        'mono':    ['DM Mono', 'monospace'],
      },
      fontSize: {
        'label': ['10px', { letterSpacing: '0.13em', lineHeight: '1' }],
      },
      letterSpacing: {
        'widest2': '0.13em',
        'widest3': '0.18em',
        'widest4': '0.20em',
      },
    },
  },
  plugins: [],
}

export default config
