import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Container } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"

import { ButtonFactory } from "../buttons/ButtonFactory"
import { AnchorTag } from "../../utils/AnchorTag"
import { mediaBreakpoint } from '../../utils/breakpoints'

const StyledTextBanner = styled.div`
  .center {
    margin: auto;
  }
  &.symptoms-table {
    overflow: scroll;

    table {
      width: 100%;
    }

    td {
      padding-right: 40px;
      padding-top: 10px;
      &:first-child {
        font-weight: bold;
      }
    }
  }

  &.coupon-section {
    margin-bottom: 3rem;

    img {
      display: block;
      margin: 20px auto;
      width: 100%;
      max-width: 900px;
      border: 1px solid #ddd;
    }

    .text-banner-body-container {
      padding: 0;
    }
  }

  &.top-icon {
    .text-banner-image {
      margin: 0 auto 20px !important;
      float: none;
    }
  }

  &.show-entire-image {
    .text-banner-image {
      max-height: unset !important;
    }
  }
`

const StyledBodyContainer = styled.div`
  padding: 0 3rem 0;

  h2 {
    margin-bottom: 1rem;
  }

  h4 {
    margin: 1.5rem 0 0.75rem;
  }

  @media ${mediaBreakpoint.down.lg} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media ${mediaBreakpoint.down.md} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media ${mediaBreakpoint.down.sm} {
    padding-left: 0;
    padding-right: 0;
  }
`

const StyledImg = styled(Img)`
  max-height: 240px;
  width: 50%;
  margin-left: ${props => props.reversed ? '0' : '3rem'};
  margin-right: ${props => props.reversed ? '3rem' : '0'};
  margin-bottom: 1rem;
  float: ${props => props.reversed ? 'left' : 'right'};

  @media ${mediaBreakpoint.down.md} {
    margin-left: ${props => props.reversed ? '0' : '2rem'};
    margin-right: ${props => props.reversed ? '2rem' : '0'};
  }

  @media ${mediaBreakpoint.down.sm} {
    margin: 0 0 1.5rem !important;
    float: none;
    width: 100%;
  }
`

export const TextBanner = ({ title, body, buttons, variant, containerClass, image, imageAltText, reversed, richTextBody }) => {
  const variantBackground = `bg-${variant}`
  return (
    <StyledTextBanner className={`${containerClass}`}>
      <AnchorTag title={title} />
      <div className={`${variantBackground}`}>
        <Container>
          <StyledBodyContainer className="text-banner-body-container">
            { image && <StyledImg reversed={reversed} fluid={image.fluid} className="text-banner-image" alt={imageAltText}/> }
            <div
              className="markdown-section"
              dangerouslySetInnerHTML={{
                __html: body && body.childMarkdownRemark.html,
              }}
            />

            {richTextBody && (
              <div className="markdown-section">
                { documentToReactComponents(richTextBody.json) }
              </div>
            )}

            {buttons && buttons.map(button => (
              <ButtonFactory key={button.id} {...button} className="mx-2" />
            ))}
          </StyledBodyContainer>
        </Container>
      </div>
    </StyledTextBanner>
  )
}
