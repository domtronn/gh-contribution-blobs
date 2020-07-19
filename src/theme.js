import { shadow } from './utils/theme-ui'

export default {
  breakpoints: [
    '768px',
    '990px'
  ],

  fonts: {
    base: 'Inter, sans-serif',
    heading: "'Abril Fatface', sans-serif"
  },

  fontSizes: {
    xs: 12,
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
    lg: 16,
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
    background: '#fbe6cd',
    grey: '#f7d6b5',
    shadow: '#1c1e26',
    'fg-on-primary': '#fbe6cd',
    fg: '#111'
  },

  shadows: {
    text: '4px 4px 12px #e5ece9',
    heading: [
      '1.5px 1.5px 0 background, -1.5px 1.5px 0 background, -1.5px -1.5px 0 background, 1.5px -1.5px 0 background, 2px 2px 0 primary, 3px 3px 0 primary, 4px 4px 0 primary, 5px 5px 0 primary',
      '2px 2px 0 background, -2px 2px 0 background, -2px -2px 0 background, 2px -2px 0 background, 4px 4px 0 primary, 5px 5px 0 primary, 6px 6px 0 primary, 7px 7px 0 primary',
      '2px 2px 0 background, -2px 2px 0 background, -2px -2px 0 background, 2px -2px 0 background, 4px 4px 0 primary, 5px 5px 0 primary, 6px 6px 0 primary, 7px 7px 0 primary'
    ],
    thumb: '0 0 0 4px background',
    'thumb-focus': '0 0 0 2px background, 0 0 0 4px primary, 0 0 0 8px background',
    'input-focus': '0 0 0 4px background, 0 0 0 8px primary',
    'input-hover': '0 0 0 2px background, 0 0 0 4px primary',
    box: '1px 2px 16px rgba(44, 64, 53, 0.2), 6px 8px 22px rgba(44, 64, 53, 0.1)'
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
      m: 0,
      p: 0,
      fontSize: ['sm', 'md', 'lg']
    },
    h4: {
      m: 0,
      p: 0,
      fontSize: ['sm', 'md', 'md']
    },
    p: {
      margin: 0,
      padding: 0,
      lineHeight: 1.8,
      fontSize: ['xs', 'base']
    },
    pre: {
      overflowX: 'scroll',
      borderRadius: 'sm',
      fontSize: 'xs',
      backgroundColor: 'shadow',
      color: 'white',
      p: 'md'
    }
  },
  elements: {
    button: {
      icon: {
        padding: 0,
        borderRadius: 'round',
        width: ['2.5em', '3em'],
        height: ['2.5em', '3em'],
        marginX: ['sm', 'md'],
        ':hover': {
          transform: 'scale(1.2)',
          boxShadow: shadow('box')
        }
      },
      link: {
        border: 'none',
        color: 'primary',
        padding: 0,
        width: ['2.5em', '3em'],
        height: ['2.5em', '3em'],
        background: 'none',
        ':hover': {
          transform: 'scale(1.2)',
          boxShadow: 'none'
        }
      }
    }
  }
}
