import React from 'react'
import {keyframes, usePrefersReducedMotion, Box} from '@chakra-ui/react'

import WaveSvg from '../images/wave-chill.svg'

const waveFlow = keyframes`
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
`

const Wave: React.FC<{flip?: boolean}> = ({flip}) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const animation = prefersReducedMotion
    ? undefined
    : `${waveFlow} 45s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite`
  return (
    <Box
      w="100%"
      position="absolute"
      bottom={flip ? `none` : `0`}
      top={flip ? `0` : `none`}
      left="0"
      height="96px"
      zIndex="10"
      overflowX="hidden"
    >
      <Box
        background={`url(${WaveSvg}) repeat-x`}
        position="absolute"
        bottom="0"
        width="6400px"
        height="96px"
        animation={animation}
        transform={
          flip ? `rotate(180deg) translate3d(0, 0, 0)` : `translate3d(0, 0, 0)`
        }
      />
    </Box>
  )
}

export {Wave}
