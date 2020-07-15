export default {
  fonts: {
    base: "Inter, sans-serif",
    heading: "'Abril Fatface', sans-serif"
  },

  fontSizes: {
    base: 18,
    xxl: 96
  },

  zIndices: {
    more: 1,
    less: -1,
    max: 999
  },

  radii: {
    sm: 4,
    md: 6,
    round: '50%'
  },

  space: {
    sm: 8,
    md: 36
  },

  colors: {
    // primary: '#4b0d67',
    // background: '#ecc5b2',
    // grey: '#e6b8a2',
    primary: '#ee4266',
    background: '#F2F5EA',
    grey: '#D6DBD2',
    fg: '#2C363F',
    'fg-on-primary': '#fff',
  },

  shadows: {
    text: '4px 4px 12px #e5ece9',
    box: `1px 2px 16px rgba(44, 64, 53, 0.2), 6px 8px 22px rgba(44, 64, 53, 0.1)`
  },

  styles: {
    root: {
      letterSpacing: '.2em',
      fontFamily: 'base',
      fontSize: 'base',
      margin: 0,
    },
    h1: {
      margin: 0,
      textAlign: 'center',
      color: 'primary',
      fontSize: 'xxl',
      fontWeight: 100,
      letterSpacing: '.2em',
      fontFamily: 'heading'
    }
  }
}
