import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import Img from "gatsby-image"
import { AnchorTag } from "../../utils/AnchorTag"
import { mediaBreakpoint } from '../../utils/breakpoints'


const StyledContainer = styled(Container)`
  margin-bottom: 3rem;

  @media ${mediaBreakpoint.up.lg} {
    h1 {
      font-size: 3em;
    }
  }

  @media ${mediaBreakpoint.down.lg} {
    h1 {
      font-size: 2.5rem;
    }
    .page-title-img {
      max-height: 300px;
    }
  }

  @media ${mediaBreakpoint.down.sm} {
    margin-bottom: 1.5rem;
    h1 {
      font-size: 2rem;
    }
  }
`
const StyledPageTitleHeading = styled.h1`
  margin: 2rem 0;
  text-align: center;
  color: #212529;
`

const StyledImg = styled(Img)`
  max-height: 500px;
`

export default function PageTitle({
  title = "Fallback Title",
  headingType = "h1",
  seoImage,
}) {
  const seoImageFluid = seoImage && seoImage.image && seoImage.image.fluid;

  return (
    <StyledContainer>
      <AnchorTag title={title} />
      <StyledPageTitleHeading as={headingType}>
        {title}
      </StyledPageTitleHeading>
      { seoImageFluid && <StyledImg fluid={seoImageFluid} className="page-title-img" alt={seoImage.altText}/> }
    </StyledContainer>
  )
}
