/** @jsx jsx */
import { jsx } from 'theme-ui'

import { shadow } from '../utils/theme-ui'

export default ({
  children,
  label,
  ...rest
}) => (
  <button
    {...rest}
    sx={{
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'primary',
      fontFamily: 'base',
      paddingY: 'sm',
      paddingX: 'md',
      margin: '0',
      borderRadius: 20,
      backgroundColor: 'background',
      color: 'primary',
      textDecoration: 'none',
      fontSize: '1rem',
      cursor: 'pointer',
      textAlign: 'center',
      webkitAppearance: 'none',
      mozAppearance: 'none',

      transition: 'all .2s ease-in',
      '*': { transition: 'all .2s ease-in' },

      ':hover': {
        transform: 'scale(1.2)',
        boxShadow: shadow('box'),
        cursor: 'pointer',
      },

      ':focus': {
        outline: 'none',
      },
    }}
  >
    {children}
  </button>
)
