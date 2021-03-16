import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"
import { AnchorTag } from "../../utils/AnchorTag"
import { mediaBreakpoint } from '../../utils/breakpoints'


const StyledContainer = styled(Container)`
`

const StyledImg = styled(Img)`
  margin-bottom: 2em;
`

const StyledText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: ${props => props.reversed ? '3em' : ''};
  padding-left: ${props => props.reversed ? '' : '3em'};

  .markdown-section {
    font-weight: 300;
    font-size: 1.25rem;
  }

  @media ${mediaBreakpoint.down.lg} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media ${mediaBreakpoint.down.md} {
    padding-left: 1rem;
    padding-right: 1rem;

    .markdown-section {
      font-size: 1.1rem;
    }
  }
  @media ${mediaBreakpoint.down.sm} {
    padding-left: 0;
    padding-right: 0;

    .markdown-section {
      font-size: 1rem;
    }
  }
`


export const Content = ({
  title,
  subtitle,
  body,
  fluid = false,
  reversed = false,
  image,
  seoImage,
  imageBackgroundSize,
  backgroundColor,
}) => {
  return (
    <>
      <AnchorTag title={title} />
      <StyledContainer>
        <Row className={`mb-4 ${reversed ? "" : "flex-row-reverse"}`}>
          <Col xs={12} sm={7}>
            {
              seoImage && (
                <StyledImg
                  Tag="section"
                  fluid={seoImage && seoImage.image.fluid}
                  backgroundColor={backgroundColor}
                  alt={seoImage.altText}
                />
              )
            }
          </Col>
          <Col xs={12} sm={5}>
            <StyledText>
              <h2 className="display-2">{title}</h2>
              <p className="lead">{subtitle}</p>

              <div
                className="markdown-section"
                dangerouslySetInnerHTML={{
                  __html: body && body.childMarkdownRemark.html,
                }}
              />
            </StyledText>
          </Col>
        </Row>
      </StyledContainer>
    </>
  )
}
