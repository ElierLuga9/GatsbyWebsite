import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"
import { mediaBreakpoint } from '../../utils/breakpoints'
import { Link } from "gatsby"


const StyledContainer = styled(Container)`
  margin-top: 3rem;
  position: relative;
  margin-bottom: 4rem;
  @media ${mediaBreakpoint.down.sm} {
    margin-bottom: 0;
  }
`

const StyledImg = styled(Img)`
`

const StyledSubtitle = styled.div`
  color: black;
  font-weight: 300;
  &:hover {
    color: #333;
  }
`

const StyledLinkContainer = styled(Link)`
  width: 40%;
  background-color: #8c95f2;
  padding: 2em;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  margin: 3em 3em 0 0;

  h3 {
    color: white;
  }

  &:hover {
    text-decoration: none !important;
  }

  @media ${mediaBreakpoint.down.md} {
    h3 {
      font-size: 1.25rem;
    }
    .link-box-subtitle {
      font-size: 0.9rem;
    }
  }

  @media ${mediaBreakpoint.down.sm} {
    position: relative;
    top: -6rem;
    left: 7rem;
    width: 60%;
    padding: 1em;
    .link-box-subtitle {
      font-size: 0.8rem;
    }
  }
`


export const ImageWithColoredLinkBox = ({
  title,
  subtitle,
  image,
  imageAltText,
  linkTo,
}) => {
  return (
    <>
      <StyledContainer>
        <Row>
          <Col sm={7} xs={11}>
            <StyledImg
              Tag="section"
              fluid={image && image.fluid}
              alt={imageAltText}
            />
          </Col>
        </Row>
        <StyledLinkContainer to={linkTo}>
          <h3>{title}</h3>
          <StyledSubtitle className="link-box-subtitle">{subtitle}</StyledSubtitle>
        </StyledLinkContainer>
      </StyledContainer>
    </>
  )
}
