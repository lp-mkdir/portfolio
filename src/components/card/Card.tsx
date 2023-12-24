import React, { FC } from 'react';
import { BoxProps, Grid } from '@chakra-ui/react';

import MotionBox from '~/components/blocks/MotionBox';

export const Wrapper = ({ children, ...rest }) => (
  <Grid
    gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
    gap="20px"
    pb="12"
    {...rest}
  >
    {children}
  </Grid>
);

const Card: FC<React.PropsWithChildren<BoxProps>> = ({ children, ...rest }) => (
  <MotionBox
    pos="relative"
    flex="1 1 0"
    minWidth="0"
    role="group"
    display="flex"
    flexDirection="column"
    justifyContent="flex-end"
    alignItems="flex-start"
    w="100%"
    h={[`10rem`, null, `15rem`, `20rem`]}
    overflow="hidden"
    borderRadius="2xl"
    {...rest}
  >
    {children}
  </MotionBox>
);

export default Card;
