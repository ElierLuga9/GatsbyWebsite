import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  margin-bottom: 2em;
`

export const ImageBlock = ({ image, altText, containerClasses }) => {
  return (
    <div className={containerClasses}>
      <StyledImg
        Tag="section"
        fluid={image && image.fluid}
        alt={altText}
      />
    </div>
  );
}
