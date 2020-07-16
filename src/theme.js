export default {
  breakpoints: [
    '768px',
    '990px'
  ],

  fonts: {
    base: "Inter, sans-serif",
    heading: "'Abril Fatface', sans-serif"
  },

  fontSizes: {
    base: 18,
    lg: 24,
    xl: 48,
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
    md: 16,
    lg: 32,
    xl: 64,
    xxl: 128
  },

  colors: {
    primary: '#4b0d67',
    secondary: '#442371',
    background: '#ecc5b2',
    grey: '#e6b8a2',
    'fg-on-primary': '#ecc5b2',

    // primary: '#3840ff',
    // secondary: '#3840ff',
    // background: '#fff',
    // grey: '#d9d9d9',
    // 'fg-on-primary': '#d9d9d9',

    // primary: '#21A0A0',
    // secondary: '#046865',
    // background: '#FCFFF7',
    // grey: '#f2f5ea',
    // 'fg-on-primary': '#FCFFF7',

    // primary: '#ee4266',
    // secondary: '#ff686b',
    // background: '#F2F5EA',
    // grey: '#D6DBD2',
    fg: '#111',
  },

  shadows: {
    text: '4px 4px 12px #e5ece9',
    heading: `2px 2px 0 background, -2px 2px 0 background, -2px -2px 0 background, 2px -2px 0 background, 4px 4px 0 primary, 5px 5px 0 primary, 6px 6px 0 primary, 7px 7px 0 primary`,
    thumb: `0 0 0 4px background`,
    'thumb-focus': `0 0 0 2px background, 0 0 0 4px primary, 0 0 0 8px background`,
    'input-focus': `0 0 0 4px background, 0 0 0 8px primary`,
    'input-hover': `0 0 0 2px background, 0 0 0 4px primary`,
    box: `1px 2px 16px rgba(44, 64, 53, 0.2), 6px 8px 22px rgba(44, 64, 53, 0.1)`
  },

  styles: {
    root: {
      letterSpacing: '.2em',
      color: 'fg',
      fontFamily: 'base',
      fontSize: 'base',
      margin: 0
    },
    h1: {
      margin: 0,
      textAlign: 'center',
      color: 'primary',
      fontSize: ['xl', 'xl', 'xxl'],
      letterSpacing: '.2em',
      fontFamily: 'heading'
    },
    h3: {
      fontSize: ['sm', 'md', 'lg']
    },
    p: {
      lineHeight: 1.8,
      fontSize: 'xs'
    }
  }
}
