/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex } from 'reflexbox'

import { shadow } from '../utils/theme-ui'
import Label from './label'

const size = 48

export default ({ on: On = () => {}, off: Off = () => {}, id, children, ...props }) => (
  <Flex
    sx={{
      marginX: 'md',
      position: 'relative',
      width: size,
      height: size,
      transition: 'all 0.1s ease-in-out',
      '*': { transition: 'all 0.1s ease-in-out' },
      '> *': {
        width: '100%',
        height: '100%'
      },

      ':hover': {
        transform: 'scale(1.2)'
      },
      ':hover div': {
        boxShadow: shadow('box')
      }
    }}
  >
    <Label id={id}>
      {children}
    </Label>

    <input
      {...props}
      sx={{
        margin: 0,
        padding: 0,
        zIndex: 'more',
        WebkitAppearance: 'none',
        backgroundColor: 'transparent',

        ':active': { outline: 'none' },
        ':hover': { outline: 'none', cursor: 'pointer' },
        ':focus': { outline: 'none' },

        '+ div': {
          position: 'absolute',
          left: 0,
          top: 0,
          backgroundColor: 'background',
          borderRadius: 'round',
          borderWidth: 3,
          borderColor: 'primary',
          borderStyle: 'solid'
        },
        ':checked + div': {
          borderWidth: size / 2
        },

        ':checked ~ .on': { display: 'block' },
        ':checked ~ .off': { display: 'none' },

        '~ .on': { display: 'none', fill: 'background' },
        '~ .off': { display: 'block', fill: 'primary' }
      }}
      type='checkbox'
    />

    <div />
    <On sx={{ position: 'absolute', top: 0, left: 0, padding: 'sm' }} size='1.6em' className='on' />
    <Off sx={{ position: 'absolute', top: 0, left: 0, padding: 'sm' }} size='1.6em' className='off' />
  </Flex>
)
