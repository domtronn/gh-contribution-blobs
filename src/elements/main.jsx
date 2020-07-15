/** @jsx jsx */
import { jsx, ThemeProvider, Styled } from 'theme-ui'
import Theme from '../theme'

export default ({ children }) => (
  <ThemeProvider theme={Theme}>
    <main
      sx={{
        width: '100%'
      }}
    >
      <Styled.root>
        {children}
      </Styled.root>
    </main>
  </ThemeProvider>
)
