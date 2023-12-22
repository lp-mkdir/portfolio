import React, { FC, PropsWithChildren } from 'react';

import { Heading, HeadingProps } from "@chakra-ui/react"

const CardTitle: FC<PropsWithChildren<HeadingProps>> = ({ children, ...rest }) => (
  <Heading
    textAlign="left"
    lineHeight="md"
    as="h3"
    variant="h3"
    fontSize={[`1.33rem`, `xl`]}
    color="white"
    mb="0"
    zIndex="1"
    textShadow="textShadows.big"
    p={[4, 6]}
    {...rest}
  >
    {children}
  </Heading>
)

export { CardTitle }
