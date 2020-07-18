/** @jsx jsx */
import { jsx, ThemeProvider, Styled } from 'theme-ui'
import Theme from '../theme'
import ThemePatches from '../theme-patches'

export default ({ children, themeId }) => {
  const i = themeId % (ThemePatches.length + 1)
  const themePatch = themeId
    ? ThemePatches[i] || {}
    : {}

  const theme = { ...Theme, colors: { ...Theme.colors, ...themePatch } }

  return (
    <ThemeProvider theme={theme}>
      <main
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <Styled.root>
          {children}
        </Styled.root>
      </main>
    </ThemeProvider>
  )
}
