/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Flex } from 'reflexbox'
import { shadow } from '../utils/theme-ui'

import Label from './label'

export const Input = ({ id, ...props }) => (
  <input
    type='text'
    id={id}
    sx={{
      width: ['100%', '100%', 'auto'],
      fontFamily: 'base',
      paddingY: 'md',
      paddingX: 'lg',
      borderRadius: 'md',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'grey',
      boxShadow: 'none',
      fontSize: 'base',
      WebkitAppearance: 'none',
      transition: 'all 0.2s ease-in-out',

      letterSpacing: '0.1em',
      color: 'fg',

      ':hover': {
        borderColor: 'background',
        boxShadow: shadow('input-hover')
      },
      ':active': {
        outline: 'none'
      },
      ':focus': {
        outline: 'none',
        boxShadow: shadow('input-focus')
      },

      variant: 'elements.input.base'
    }}
    {...props}
  />
)

export default ({ id, children, ...props }) => (
  <Flex
    flexDirection='column'
    {...props}
  >
    <Label id={id}>
      {children}
    </Label>
    <Input id={id} {...props} />
  </Flex>
)
