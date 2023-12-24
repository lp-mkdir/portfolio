import React, { FC, PropsWithChildren } from 'react';
import {
  useMultiStyleConfig,
  Box,
  Container,
  BoxProps,
} from '@chakra-ui/react';

interface IFullWidthContainer extends BoxProps {
  variant?: 'default' | 'hero' | 'navigation' | 'max' | 'footer' | undefined;
}

const FullWidthContainer: FC<PropsWithChildren<IFullWidthContainer>> = ({
  variant = 'default',
  children,
  ...rest
}) => {
  const styles = useMultiStyleConfig(`FullWidthContainer`, { variant });
  return (
    <Box
      data-name="full-width-container-outer"
      sx={{ ...styles.outer }}
      {...rest}
    >
      <Container
        data-name="full-width-container-inner"
        sx={{ ...styles.inner }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default FullWidthContainer;
