/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { normalise, flip } from '../utils/data'

const { data } = normalise({ data: Array(12).fill(1) }, 30)
const month = (i) => Months[i].slice(0, 3)
const Months = flip([
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
])

const Delays = flip(Array(12).fill().map((_, i) => i * 0.05))

export default ({
  size = 80,
  className
}) => {
  const { theme } = useThemeUI()
  return (
    <g
      transform={`translate(${size / 2} ${size / 2})`}
    >
      {data.map(([x, y], i) => (
        <text
          textAnchor='middle'
          x={x}
          y={y}
          key={i}
          data-month={Months[i].toLowerCase()}
          fill={theme.colors.fg}
          sx={{
            opacity: 0,
            animation: `fadeIn 0.8s ${Delays[i]}s ease-in-out forwards`,
            letterSpacing: '0.2em',
            fontSize: [3, 2, 2]
          }}
        >
          {month(i)}
        </text>
      ))}
    </g>)
}
