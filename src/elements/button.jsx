/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useState } from 'react'
import { shadow } from '../utils/theme-ui'

export default ({
  children,
  label,
  ...rest
}) => {
  const [md, setMd] = useState(false)

  return (
    <button
      {...rest}
      onMouseDown={() => setMd(true)}
      onMouseUp={() => setMd(false)}
      sx={{
        width: '3em',
        height: '3em',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'none',

        fontFamily: 'base',
        marginY: '0',
        marginX: 'md',
        borderRadius: 'round',
        backgroundColor: 'primary',
        color: 'background',
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
          cursor: 'pointer'
        },

        ':focus': {
          outline: 'none'
        },

        ':active': {
          transform: md ? 'scale(1.1)' : 'scale(1.2)'
        }
      }}
    >
      {children}
    </button>
  )
}
