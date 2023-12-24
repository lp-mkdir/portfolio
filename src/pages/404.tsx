import React from 'react';
import { Link } from 'gatsby';
import { Container, Text } from '@chakra-ui/react';
import { Layout } from '~/components/Layout';

export default function NotFound() {
  return (
    <Layout navBlack>
      <Container pt={[`12rem`, null, 40]}>
        <h2>Ooopss..</h2>
        <Text>
          The page you are trying to access does not exist yet, please feel free
          to <Link to="/">Return</Link>.
        </Text>
      </Container>
    </Layout>
  );
}
