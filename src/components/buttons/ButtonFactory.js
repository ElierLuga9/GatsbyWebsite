import React from "react"
import { Button } from "react-bootstrap"
import styled from "styled-components"
import { mediaBreakpoint } from "../../utils/breakpoints"

export const ButtonFactory = button => {
  const StyledButton = styled(Button)`
    letter-spacing: 1px;
    font-weight: 300;

    &.btn-primary {
      color: #fff;
    }
    &.btn-secondary {
      color: #fff;
    }

    &.pink-dark {
      color: #cf5e6f;
      border-color: #cf5e6f;
      border-width: 2px;
      font-weight: normal;
    }

    &.beige {
      border-color: #f7eaca;
      background-color: #f7eaca;
      color: black;
      font-weight: normal;

      &:hover {
        background-color: darken(#f7eaca, 10%) !important;
      }
    }


    @media ${mediaBreakpoint.down.sm} {
      font-size: 0.85rem;
      padding: 12px;
    }
  `

  const variantFull = `${button.variantOutline ? "outline-" : ""}${
    button.variant
  }`

  const btnProps = {
    variant: variantFull,
    className: `mb-3 ${button.btnClasses} ${button.className}`,
  }

  if (button.scrollTo) {
    btnProps.onClick = () => {
      const el = document.getElementById(button.scrollTo)
      el && el.scrollIntoView()
    }
  } else {
    btnProps.href = button.linkUrl
  }

  return (
    <StyledButton {...btnProps}>
      {button.text}
    </StyledButton>
  )
}
