import React from "react"
import { ButtonFactory } from "../buttons/ButtonFactory"
import styled from "styled-components"


const StyledButton = styled.div`
  text-align: center;
`

export const Button = (btnProps) => {
	console.log(btnProps)
  return (
	  <StyledButton>
	    <ButtonFactory {...btnProps} className="mx-2" />
	  </StyledButton>
	 )
}
