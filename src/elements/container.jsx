/** @jsx jsx */
import { jsx } from 'theme-ui'

import { ThemeProvider } from 'theme-ui'
import Theme from '../src/theme'

export default ({ children }) => (
  <ThemeProvider theme={Theme}>
    {children}
  </ThemeProvider>
)
