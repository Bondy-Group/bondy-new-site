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
        // Base
        'b-black':   '#111111',
        'b-white':   '#FFFFFF',
        'b-off':     '#F9F8F6',
        'b-stone':   '#F0EBE3',
        // Text
        'b-ink':     '#1A1A1A',
        'b-mid':     '#888885',
        'b-light':   '#D8D6D2',
        // Borders
        'b-rule':    '#E8E2DA',
        'b-charcoal':'#1A1A1A',
        // Sienna accent palette (primary accent direction)
        'b-sie':     '#C06A2D',   // primary sienna
        'b-sie-lt':  '#D86830',   // lighter sienna
        'b-sie-xl':  '#F09060',   // extra light
        'b-sie-faint':'#FBF0EB',  // faint tint
        'b-sie-dk':  '#8C3C14',   // dark sienna
        // Legacy orange (kept for transition — use b-sie instead)
        'b-orange':  '#C06A2D',   // now points to sienna
      },
      fontFamily: {
        'display': ['var(--font-playfair)', 'Georgia', 'serif'],
        'body':    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        'mono':    ['var(--font-dm-mono)', 'monospace'],
      },
      letterSpacing: {
        'widest2': '0.2em',
        'widest3': '0.25em',
      },
    },
  },
  plugins: [],
}

export default config
