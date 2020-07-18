/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Flex } from 'reflexbox'
import { Input } from './text-input'
import Label from './label'
import Autocomplete from 'react-autocomplete'

import { shadow } from '../utils/theme-ui'

export default ({ id, children, renderItem: f, ...props }) => (
  <Flex
    sx={{
      position: 'relative',
    }}
  >
    <Label id='id'>
      {children}
    </Label>
    <Autocomplete
      {...props}
      renderMenu={items => (
        <Flex
          sx={{
            display: items.length ? 'block' : 'none',
            animation: 'bounceIn 0.6s ease-in-out forwards',

            width: 'calc(100% + 100px)',
            marginLeft: -50,
            position: 'absolute',
            top: 50,
            left: 0,

            backgroundColor: 'white',
            boxShadow: shadow('box'),
            paddingX: 'lg',
            paddingY: 'md',
            borderRadius: 'md',
            zIndex: 'max',
            marginTop: 'md',
            overflowX: 'hidden',

            '::after': {
              content: '""',
              background: 'linear-gradient(90deg, transparent, white, white, white)',
              height: '100%',
              width: ({ space }) => space.lg,
              position: 'absolute',
              top: 0,
              right: 0,
            }
          }}
          children={items}
        />
      )}
      renderInput={Input}
      renderItem={item => (
        <Flex
          alignItems='center'
          sx={{
            ':hover': {
              cursor: 'pointer'
            },
            paddingX: 'md',
            paddingY: 'sm',
            textAlign: 'left'
          }}
        >
          {f(item)}
        </Flex>
      )}
    />
  </Flex>
)
