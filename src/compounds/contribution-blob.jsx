/** @jsx jsx */
import { jsx } from 'theme-ui'

import { pivotAndNormalize } from '../utils/data'
import { svgPath, bezierPath, linePath } from '../utils/svg'

const maxScale = 0.8

export const Blob = ({
  data,
  size,
  scale = 1,
  smooth = 0.2,
  highlight = false,
  className,
  ...props
}) => (
  <path
    className={className}
    d={svgPath(data, bezierPath(smooth, true), true)}
    transform={`translate(${size} ${size}) scale(${highlight ? maxScale : scale})`}
    {...props}
  />
)

export default ({
  data: _data,
  range: _range = 15,
  smooth: _smooth = 0.2,
  opacity: _opacity = 0.2,

  highlight = [],

  className
}) => {
  const size = 80
  const [scale, range] = [45 - _range, _range]
  const data = pivotAndNormalize(_data, scale, range)

  return (
    <svg
      height='80vh'
      sx={{
        marginY: [-size * 1.2],
        marginX: [0,0,'auto'],
        alignSelf: 'center',
        overflow: 'visible',
        maxWidth: ['100vw','100vw','160vh']
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
           scale={
             highlight.length
               ? 0
               : 0.3 + (0.1 * (arr.length - i))
           }
           smooth={_smooth}
           highlight={highlight.includes(year)}
           sx={{
             fill: i % 2 ? 'primary' : 'secondary',
             transition:
             highlight.length && !highlight.includes(year)
               ? `all 0.5s ease-in-out`
               : highlight.includes(year)
               ? `all 0.8s 0s cubic-bezier(.77,2.03,.68,.56), opacity 0.4s ease-in-out`
               : `all 0.8s ${0.05 * (arr.length - i)}s cubic-bezier(.77,2.03,.68,.56), opacity 0.4s ease-in-out`,
             opacity: _opacity
           }}
         />
       ))}
    </svg>
  )
}
