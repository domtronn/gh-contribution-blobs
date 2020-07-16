/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ id, children }) => (
  <label
    htmlFor={id}
    sx={{
      width: 1,
      height: 1,
      mt: -1,
      clip: 'rect(0 0 0 0)',
      overflow: 'hidden',
      position: 'absolute',
    }}
  >
    {children}
  </label>
)
