/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ children }) => (
  <ThemeProvider theme={Theme}>
    {children}
  </ThemeProvider>
)
