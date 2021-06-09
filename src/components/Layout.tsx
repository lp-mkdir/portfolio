import React from "react"
import { Header } from "./blocks/header"
import { CookieBanner } from "./CookieBanner/CookieBanner"
import { Footer } from "../components/footer"
import "../prism.css"

interface ILayoutProps {
  navBlack?: boolean
  children?: React.ReactNode
}
export const Layout = ({ children, navBlack = false }: ILayoutProps) => (
  <>
    <CookieBanner content="Hallo" buttonText="Accept" />
    <Header navBlack={navBlack} />
    {children}
    <Footer />
  </>
)
