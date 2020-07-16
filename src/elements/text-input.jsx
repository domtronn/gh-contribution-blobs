/** @jsx jsx */
import { jsx } from 'theme-ui'

import { shadow } from '../utils/theme-ui'

export default (props) => (
  <input
    sx={{
      fontFamily: 'base',
      paddingY: 'md',
      paddingX: 'lg',
      borderRadius: 'md',
      boxShadow: 'none',
      fontSize: 'base',
      border: 'none',
      WebkitAppearance: 'none',
      transition: 'all 0.2s ease-in-out',

      ':hover': {
        boxShadow: shadow('input-hover')
      },
      ':active': {
        outline: 'none',
      },
      ':focus': {
        outline: 'none',
        boxShadow: shadow('input-focus')
      }
    }}
    {...props}
  />
)
