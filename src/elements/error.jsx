/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export default ({
  error = false,
  emoji = '😱',
  children
}) => {
  if (!error) return null

  return (
    <div
      sx={{
        animation: 'fadeIn 0.8s ease-in-out forwards',
        position: 'absolute',
        alignSelf: 'center',
        justifySelf: 'center',
        textAlign: 'center'
      }}
    >
      <div
        sx={{
          animation: 'tada 1.2s ease-in-out'
        }}
      >
        <span
          sx={{ fontSize: 'xxl' }}
          aria-label='something-went-wrong-scream'
          role='img'
        >
          {emoji}
        </span>
      </div>
      <Styled.p>
        {children}
      </Styled.p>
    </div>
  )
}
