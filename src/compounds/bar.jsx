/** @jsx jsx */
import { jsx } from 'theme-ui'
import Container from '../elements/container'

export default ({ children }) => (
  <Container
    sx={{
      position: 'relative',
      zIndex: 'max',
      padding: 'md',
      borderRadius: 'md',
      backgroundColor: 'background',
      boxShadow: 'box'
    }}
  >
    {children}
  </Container>
)
