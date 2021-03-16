import React from "react"
import styled from 'styled-components'

const StyledSpacer = styled.div`
  border-bottom: ${props => props.withLine ? '1px solid #ddd' : 'none'};
  width: 75%;
  margin: ${props => props.margin}px auto;
`

export const Spacer = ({ size, withLine }) => {
  switch (size) {
    case "Small":
      return <StyledSpacer withLine={withLine} margin={25} />
    case "Medium":
      return <StyledSpacer withLine={withLine} margin={50} />
    case "Large":
      return <StyledSpacer withLine={withLine} margin={125} />

    default:
      console.log("No Spacer Size Found")
      return null
  }
}
