/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'

import { pivotAndNormalize } from '../utils/data'
import { svgPath, bezierPath } from '../utils/svg'

export default ({
  data,
  time = 700,
  animate = true,
  children,
  className
}) => {
  const [i, setI] = useState(0)
  const [d] = useState(
    Object.values(
      pivotAndNormalize(data, 10, 5)
    )
  )

  useEffect(() => {
    if (!animate) return
    const iid = setTimeout(() => {
      setI((i + 1) % d.length)
    }, time)

    return () => clearInterval(iid)
  }, [i, animate])

  return (
    <div
      className={className}
    >
      <svg
        viewBox='0 0 40 40'
        height='20vh'
        sx={{

        }}>
        <path
          sx={{
            fill: 'primary',
            opacity: 1,
            transition: `all ${3 * time / 4}ms cubic-bezier(.77,2.03,.68,.56)`,
            transform: 'translate(20px, 20px)'
          }}
          d={svgPath(d[i], bezierPath(0.2, true), true)}
        />
      </svg>
      {children}
    </div>
  )
}
