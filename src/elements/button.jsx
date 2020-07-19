/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useState } from 'react'
import { shadow } from '../utils/theme-ui'
import { darken } from '@theme-ui/color'

export default ({
  children,
  label,
  className,
  variant,
  ...rest
}) => {
  const [md, setMd] = useState(false)

  return (
    <button
      {...rest}
      onMouseDown={() => setMd(true)}
      onMouseUp={() => setMd(false)}
      sx={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'none',

        fontFamily: 'base',
        paddingX: 'md',
        paddingY: 'sm',
        marginY: '0',
        borderRadius: 'sm',
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
          backgroundColor: darken('primary', 0.1),
          boxShadow: shadow('box'),
          cursor: 'pointer'
        },

        ':focus': {
          outline: 'none'
        },

        ':active': {
          transform: variant ? md ? 'scale(1.1)' : 'scale(1.2)' : ''
        },

        variant: `elements.button.${variant}`
      }}
      className={className}
    >
      {children}
    </button>
  )
}
