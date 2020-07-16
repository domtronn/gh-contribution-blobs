/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useState } from 'react'
import { shadow } from '../utils/theme-ui'

export default ({
  from, to,
  value = 0,
  step = 1,
  onChange = () => {},
}) => {
  const [active, setActive] = useState(false)
  const sxThumb = {
    transition: 'transform 0.1s ease-in-out',
    transform: active ? 'scale(1.2)' : 'scale(1)',
    WebkitAppearance: 'none',
    mt: -10,
    width: 24,
    height: 24,
    borderRadius: 'round',
    backgroundColor: 'primary',
    cursor: 'pointer',
    boxShadow: active ? shadow('thumb-focus') : shadow('thumb')
  }

  const sxTrack = {
    width: '100%',
    height: 4,
    cursor: 'pointer',
    borderRadius: 'sm',
    backgroundColor: 'grey'
  }

  return (
    <input
      onChange={(e) => onChange(e.target.value)}

      type='range'
      min={from}
      max={to}
      step={step}

      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}

      sx={{
        /* reset styles */
        appearance: 'none',
        outline: 'none',
        background: 'transparent',

        width: '100%',

        '::-ms-track': {
          width: '100%',
          cursor: 'pointer',
          background: 'transparent',
          borderColor: 'transparent',
          color: 'transparent',
        },

        '::-webkit-slider-thumb': sxThumb,
        '::-moz-range-thumb': sxThumb,
        '::-ms-thumb': sxThumb,

        '::-webkit-slider-runnable-track': sxTrack,
        '::-moz-range-track': sxTrack,
        '::-ms-track': sxTrack,
      }}

    />

  )
}
