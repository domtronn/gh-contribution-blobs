/** @jsx jsx */
import { jsx } from 'theme-ui'

import { pivotAndNormalize } from '../utils/data'
import { svgPath, bezierPath, linePath } from '../utils/svg'

export const Blob = ({
  data,
  size,
  scale = 1,
  smooth = 0.2,
  className,
  ...props
}) => (
  <path
    className={className}
    d={svgPath(data, bezierPath(smooth, true), true)}
    transform={`translate(${size} ${size}) scale(${scale})`}
    {...props}
  />
)

export default ({
  data: _data,
  range: _range = 15,
  smooth: _smooth = 0.2,
  opacity: _opacity = 0.2,
  className
}) => {
  const size = 85
  const [scale, range] = [45 - _range, _range]
  const data = pivotAndNormalize(_data, scale, range)

  return (
    <svg
      width='160vh'
      height='80vh'
      sx={{
        marginY: -size * 1.2,
        marginX: 'auto',
        alignSelf: 'center'
      }}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
    >
      {Object
       .entries(data)
       .reverse()
       .map(([year, d], i, arr) => (
         <Blob
           data-year={year}
           key={i}
           data={d}
           size={size / 2}
           scale={0.3 + (0.1 * (arr.length - i))}
           smooth={_smooth}
           sx={{
             fill: i % 2 ? 'primary' : 'secondary',
             transition: `all 0.8s ${0.05 * (arr.length - i)}s cubic-bezier(.77,2.03,.68,.56), opacity 0.4s ease-in-out`,
             opacity: _opacity
           }}
         />
       ))}
    </svg>
  )
}
