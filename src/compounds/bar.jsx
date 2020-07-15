/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ children }) => (
  <div
    sx={{
      position: 'relative',
      zIndex: 'max',

      marginX: 'auto',
      padding: 'md',
      borderRadius: 'md',
      backgroundColor: 'background',
      boxShadow: 'box',

      width: '60%'
    }}
  >
    {children}
  </div>
)
