/** @jsx jsx */
import { jsx, ThemeProvider, Styled } from 'theme-ui'
import Theme from '../theme'

export default ({ children }) => (
  <ThemeProvider theme={Theme}>
    <main
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Styled.root>
        {children}
      </Styled.root>
    </main>
  </ThemeProvider>
)
