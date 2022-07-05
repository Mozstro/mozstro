module.exports = {
  darkMode: false,
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Galano\\ Grotesque', 'system-ui'],
      mono: ['Ubuntu\\ Mono'],
      serif: ['Cousine', 'serif'],
    },
    colors: {
      ebonyclay: 'var(--ebony-clay)',
      sundance: 'var(--sundance)',
      rollingstone: 'var(--rolling-stone)',
      palesky: 'var(--pale-sky)',
      equator: 'var(--equator)',
      geebung: 'var(--geebung)',
      hippiegreen: 'var(--hippie-green)',
      white: 'var(--white)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: ['./components/*.tsx', './pages/*.tsx', './pages/**/*.tsx'],
};
