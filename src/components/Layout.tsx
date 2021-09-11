import React from 'react'
import {Header} from './blocks/header'
import {CookieBanner} from './CookieBanner/CookieBanner'
import {Footer} from '../components/footer'
import '../styles/prism.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/700.css'

// Defaults to weight 400.
interface ILayoutProps {
  navBlack?: boolean
  children?: React.ReactNode
}
export const Layout = ({children, navBlack = false}: ILayoutProps) => (
  <>
    <CookieBanner />
    <Header navBlack={navBlack} />
    {children}
    <Footer />
  </>
)
