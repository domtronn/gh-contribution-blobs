/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useState } from 'react'

import { pivot } from '../utils/data'

import { RiCloseCircleLine, RiArrowDropLeftLine } from 'react-icons/ri'

export default ({
  data,
  className,
  onHover = () => {},
  onClick = () => {}
}) => {
  const [active, setActive] = useState()
  const items = Object.keys(pivot(data))

  return (
    <div
      sx={{
        alignSelf: 'center',
        position: 'absolute',
        width: 'auto'
      }}
      className={className}
    >
      {items.map((item, i) => (
        <span
          key={i}
          onClick={e => {
            active === i ? setActive(undefined) : setActive(i)
            active === i ? onClick(undefined) : onClick(item)
          }}
          onMouseEnter={e => onHover(item)}
          onMouseLeave={e => onHover()}
          sx={{
            display: 'block',
            position: 'relative',
            '.svg': { fill: 'primary', opacity: 0 },
            ...(i !== active ? {} :
                {
                  h3: { color: 'primary' },
                  '.svg__highlight': { opacity: 1 }
                }),
            '*': { transition: 'all 0.2s 0s ease-in-out' },
            ':hover': {
              cursor: 'pointer',
              h3: { color: i === active ? 'primary' : 'secondary' },
              ...(i !== active ? {} :
                  {
                    '.svg__close': { opacity: 1 },
                    '.svg__highlight': { opacity: 0 }
                  })
            }
          }}
        >
          <RiArrowDropLeftLine className='svg svg__highlight' size='1.6em' sx={{ position: 'absolute', left: '-1.8em' }} />
          <RiCloseCircleLine className='svg svg__close' size='1.6em' sx={{ position: 'absolute', right: '-1.4em' }} />
          <Styled.h3>{item}</Styled.h3>
        </span>
      ))}
    </div>
  )
}
