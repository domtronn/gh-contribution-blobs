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
      height: 200
    }}
  >
    <svg
      sx={{
        position: 'absolute',
        top: -320,
        fill: 'primary'
      }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
    >
      <path d='M0,192L80,213.3C160,235,320,277,480,282.7C640,288,800,256,960,250.7C1120,245,1280,267,1360,277.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'></path>
    </svg>

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
