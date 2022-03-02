import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <Wrapper>
      <h1>Hey from header</h1>
    </Wrapper>
  )
}
const Wrapper = styled.header`
  height: 10rem;

  /* delete this for the logo height */
`

export default Header
