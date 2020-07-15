export default {
  fonts: {
    base: "Inter, sans-serif",
    heading: "'Abril Fatface', sans-serif"
  },

  fontSizes: {
    base: 18,
    xxl: 128
  },

  zIndices: {
    less: -1
  },

  colors: {
    primary: '#4b0d67',
    background: '#ecc5b2',
    grey: '#e6b8a2',
    fg: '#333',
    'fg-on-primary': '#fff',
  },

  shadows: {
    text: '4px 4px 12px #e5ece9'
  },

  styles: {
    root: {
      fontFamily: 'base',
      fontSize: 'base',
      marign: 0,
    },
    h1: {
      textAlign: 'center',
      color: 'primary',
      fontSize: 'xxl',
      fontWeight: 100,
      letterSpacing: '.2em',
      fontFamily: 'heading'
    }
  }
}
