/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box } from 'reflexbox'

export default ({
  dFrom = '',
  dTo = '',
  from,
  to,
  children,
  className
}) => (
  <Box
    className={className}
  >
    <svg
      sx={{ position: 'absolute', bottom: -1, fill: to, left: -1, right: -1, width: 'calc(100% + 2px)' }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
    >
      <path d={dTo} />
    </svg>
    <svg
      sx={{ mt: -320, fill: from }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
    >
      <path d={dFrom} />
    </svg>
    {children}
  </Box>
)
