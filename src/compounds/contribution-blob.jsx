/** @jsx jsx */
import { jsx } from 'theme-ui'

import { pivotAndNormalize } from '../utils/data'
import { svgPath, bezierPath, linePath } from '../utils/svg'

export const Blob = ({
  data,
  size,
  scale = 1,
  smooth = 0.2,
  delay = 0,
  className
}) => (
  <path
    sx={{
      transition: `all 0.8s ${delay}s cubic-bezier(.77,2.03,.68,.56)`
    }}
    className={className}
    d={svgPath(data, bezierPath(smooth, true), true)}
    transform={`translate(${size} ${size}) scale(${scale})`}
  />
)

export default ({
  data: _data,
  range: _range = 15,
  smooth: _smooth = 0.2,
  className
}) => {
  const size = 60
  const [scale, range] = [40 - _range, _range]
  const data = pivotAndNormalize(_data, scale, range)

  return (
    <svg
      width='80vh'
      height='80vh'
      sx={{
        marginY: -size * 1.5,
        alignSelf: 'center',
      }}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      {Object
       .values(data)
       .map((d, i) => (
         <Blob
           key={i}
           data={d}
           size={size / 2}
           scale={0.3 + (0.05 * i)}
           delay={0.05 * i}
           smooth={_smooth}
           sx={{
             fill: 'primary',
             opacity: 0.3
           }}
         />
       ))}
    </svg>
  )
}
