/** @jsx jsx */
import { jsx } from 'theme-ui'

import { useState } from 'react'

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
    '-webkit-appearance': 'none',
    mt: -10,
    width: 24,
    height: 24,
    borderRadius: 'round',
    backgroundColor: 'primary',
    cursor: 'pointer'
  }

  const sxThumbFocus = {
    boxShadow: ({ colors: c }) => active ? `0 0 0 4px ${c.background}, 0 0 0 6px ${c.primary}` : ''
  }

  const sxTrack = {
    width: '100%',
    height: 4,
    cursor: 'pointer',
    borderRadius: 'sm',
    backgroundColor: 'grey'
  }

  return (
    <div>
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

          ':focus::-webkit-slider-thumb': sxThumbFocus,
          ':focus::-moz-range-thumb': sxThumbFocus,
          ':focus::-ms-thumb': sxThumbFocus,

          '::-webkit-slider-runnable-track': sxTrack,
          '::-moz-range-track': sxTrack,
          '::-ms-track': sxTrack,
        }}

      />
      <span />
    </div>
  )
}
