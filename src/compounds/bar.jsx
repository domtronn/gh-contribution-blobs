/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from 'reflexbox'

export default ({ children }) => (
  <Flex
    flexWrap='wrap'
    sx={{
      position: 'relative',
      zIndex: 'max',

      marginX: ['lg', 'lg', 'auto'],
      padding: 'md',
      borderRadius: 'md',
      backgroundColor: 'background',
      boxShadow: 'box',

      maxWidth: ['100%','100%',960],
    }}
  >
    {children}
  </Flex>
)
