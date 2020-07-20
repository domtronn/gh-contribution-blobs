/** @jsx jsx */
import { jsx } from 'theme-ui'

import { alpha } from '@theme-ui/color'
import { Flex, Box } from 'reflexbox'

export default ({ isOpen, onClose = () => {}, children, ...props }) => {
  if (!isOpen) return null

  return (
    <Flex
      onClick={onClose}
      alignItems='center'
      justifyContent='center'
      sx={{
        zIndex: ({ zIndices: z }) => z.max * 2,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: alpha('shadow', 0.6),
        animation: 'fadeIn 0.2s ease-in'
      }}
    >
      {children}
    </Flex>
  )
}
