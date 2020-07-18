/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { GrKeyboard } from 'react-icons/gr'

export default () => (
  <footer
    sx={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'primary',
      height: 200,
      pb: ['md', 'md', 0]
    }}
  >

    <Styled.p
      sx={{
        textAlign: 'center',
        color: 'fg-on-primary'
      }}
    >
      © 2020 Dom Charlesworth
      <br />
      Built with
      <GrKeyboard
        size='1.5em'
        sx={{ '*': { strokeWidth: 0.8, stroke: 'fg-on-primary' }, mx: 12, mb: -6 }}
      />
      by Dom Charlesworth
    </Styled.p>

  </footer>
)
