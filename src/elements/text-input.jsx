/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Flex } from 'reflexbox'
import { shadow } from '../utils/theme-ui'

import Label from './label'

export default ({ id, children, ...props }) => (
  <Flex
    flexDirection='column'
  >
    <Label id={id}>
      {children}
    </Label>
    <input
      type='text'
      id={id}
      sx={{
        fontFamily: 'base',
        paddingY: 'md',
        paddingX: 'lg',
        borderRadius: 'md',
        boxShadow: 'none',
        fontSize: 'base',
        border: 'none',
        WebkitAppearance: 'none',
        transition: 'all 0.2s ease-in-out',

        letterSpacing: '0.1em',
        color: 'fg',

        ':hover': {
          boxShadow: shadow('input-hover')
        },
        ':active': {
          outline: 'none',
        },
        ':focus': {
          outline: 'none',
          boxShadow: shadow('input-focus')
        }
      }}
      {...props}
    />
  </Flex>
)
