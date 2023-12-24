import React from 'react';
import Header from '~/components/blocks/header';
import CookieBanner from '~/components/cookie-banner/CookieBanner';
import Footer from '~/components/Footer';
import '~/styles/prism.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

interface ILayoutProps {
  navBlack?: boolean;
  children?: React.ReactNode;
}
export const Layout = ({ children, navBlack = false }: ILayoutProps) => (
  <>
    <CookieBanner />
    <Header navBlack={navBlack} />
    {children}
    <Footer />
  </>
);
