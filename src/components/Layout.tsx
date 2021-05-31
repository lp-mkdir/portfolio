import React from "react"
import { Header } from "./blocks/header"
import { CookieBanner } from "./CookieBanner/CookieBanner"

export const Layout = ({ children }) => (
  <>
    <CookieBanner content="Hallo" buttonText="Accept" />
    <Header />
    {children}
  </>
)
