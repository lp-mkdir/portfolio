import React from "react"
import { keyframes, usePrefersReducedMotion, Box } from "@chakra-ui/react"

const WaveSvg = require(`../images/wave-chill.svg`)

const waveFlow = keyframes`
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
`

const Wave: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const animation = prefersReducedMotion ? undefined : `${waveFlow} 45s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite`
  return (
    <Box w="100%" position="absolute" bottom="0" left="0">
      <Box
        background={`url(${WaveSvg}) repeat-x`}
        position="absolute"
        top="-96px"
        width="6400px"
        height="96px"
        animation={animation}
      />
    </Box>
  )
}

export default Wave
