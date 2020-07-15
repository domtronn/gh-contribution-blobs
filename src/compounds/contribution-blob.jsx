/** @jsx jsx */
import { jsx } from 'theme-ui'

import { pivotAndNormalize } from '../utils/data'
import { svgPath, bezierPath, linePath } from '../utils/svg'

export const Blob = ({ data, size, scale = 1, className }) => (
  <path
    className={className}
    d={svgPath(data, bezierPath(0.2, true), true)}
    transform={`translate(${size} ${size}) scale(${scale})`}
  />
)

export default ({ data: _data }) => {
  const size = 60
  const [scale, range] = [25, 15]
  const data = pivotAndNormalize(_data, scale, range)

  return (
    <svg
      width='80vh'
      height='80vh'
      sx={{
        marginY: -size * 3,
        alignSelf: 'center'
      }}
      viewBox={`0 0 ${size} ${size}`}
    >
      {Object
       .values(data)
       .map((d, i) => (
         <Blob
           key={i}
           data={d}
           size={size / 2}
           scale={0.3 + (0.05 * i)}
           sx={{
             fill: 'primary',
             opacity: 0.3
           }}
         />
       ))}
    </svg>
  )
}
