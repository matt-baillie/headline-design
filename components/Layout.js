import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import "normalize.css"

const Layout = ({ children }) => {
  console.log(children)
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.body`
  background-color: black;
  padding: 2.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  min-height: 100vh;
`

export default Layout
