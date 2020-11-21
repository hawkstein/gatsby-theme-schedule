import React from "react"
import { Container, Flex } from "theme-ui"
import Header from "./header"
import Footer from "./footer"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Flex sx={{ flexDirection: "column", height: "100vh" }}>
    <Header />
    <Container as="main" sx={{ flex: "1 0 auto" }}>
      {children}
    </Container>
    <Footer />
  </Flex>
)

export default Layout
