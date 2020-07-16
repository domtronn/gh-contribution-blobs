/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from 'reflexbox'

export default ({ children, className }) => (
  <Flex
    flexWrap='wrap'
    sx={{
      position: 'relative',
      marginX: ['md', 'lg', 'auto'],
      maxWidth: ['100%','100%',960],
    }}
    className={className}
  >
    {children}
  </Flex>
)
