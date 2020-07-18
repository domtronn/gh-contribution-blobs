/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Flex } from 'reflexbox'
import { Input } from './text-input'
import Label from './label'
import Autocomplete from 'react-autocomplete'

import { shadow } from '../utils/theme-ui'

export default ({ id, children, getItemValue, renderItem: f, ...props }) => (
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
      getItemValue={getItemValue}
      renderMenu={items => (
        <Flex
          sx={{
            display: items.length ? 'block' : 'none',
            animation: 'bounceIn 0.6s ease-in-out forwards',

            width: ['100%', '100%', 'calc(100% + 100px)'],
            marginLeft: [0, 0, -50],
            position: 'absolute',
            top: 50,
            left: 0,

            backgroundColor: 'white',
            boxShadow: shadow('box'),
            paddingX: ['sm', 'md', 'lg'],
            paddingY: ['sm', 'md', 'md'],
            borderRadius: 'md',
            zIndex: 'max',
            marginTop: 'md',
            overflowX: 'hidden',

            '::after': {
              content: '""',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.01), white, white, white)',
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
          aria-label={getItemValue(item)}
          aria-role='button'
          alignItems='center'
          sx={{
            position: 'relative',
            transition: 'transform 0.4s ease',
            '*': { transition: 'transform 0.4s ease' },
            ':hover': {
              color: 'primary',
              cursor: 'pointer',
              img: {
                transform: 'scale(1.4)'
              },
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
