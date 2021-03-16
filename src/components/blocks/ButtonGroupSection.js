import React from "react"
import { ButtonFactory } from "../buttons/ButtonFactory"
import styled from "styled-components"
import { AnchorTag } from "../../utils/AnchorTag"


const StyledTitle = styled.h1`
  text-align: center;
  color: #fff;
  margin-bottom: 2rem;
  font-weight: 300;
`

const StyledContainer = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
`

const StyledButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.inline ? 'row' : 'column'};
  justify-content: center;
  margin-bottom: 2rem;


  .btn {
    font-size: 1rem;
  }

  .btn-underline .btn {
    margin-bottom: 1.2rem !important;
    padding: 0;
    border: none;
    // border-bottom: 1px solid #fff;
    text-decoration: underline;
    text-underline-position: under;
    font-size: 1.1rem;

    &:hover {
      background-color: transparent;
    }
  }

`

const StyledButton = styled.div`
  text-align: center;
`

export const ButtonGroupSection = ({ title, buttons, inline, buttonStyle }) => {
  return (
    <StyledContainer>
      <AnchorTag title={title} />
      <StyledTitle>{title}</StyledTitle>
      <StyledButtonsContainer inline={inline}>
        {buttons && buttons.map(button => (
          <StyledButton key={button.id} className={`btn-${buttonStyle}`}>
            <ButtonFactory {...button} className="mx-2" />
          </StyledButton>
        ))}
      </StyledButtonsContainer>
    </StyledContainer>
  )
}
