import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  margin: auto;
  max-width: 1000px;
`

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}
