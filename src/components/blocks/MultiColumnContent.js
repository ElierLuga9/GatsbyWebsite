import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

import { AnchorTag } from "../../utils/AnchorTag"
import { mediaBreakpoint } from "../../utils/breakpoints"
import { ButtonGroupSection } from "./ButtonGroupSection"

const columnLayoutStyles = {
  verticalImageTitleText: "vertical-image-title-text",
}

function randomHex() {
  return Math.random()
    .toString(36)
    .substring(2, 8)
}

const ResponsiveContent = styled.div`
  padding: 1rem 3rem;

  strong {
    font-weight: 800;
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

  .flex-col {
    height: 100%;
    display: flex;
    align-items: center;

    h5 {
      width: 100%;
      text-align: center;
    }
  }

  .gatsby-image-wrapper {
    img {
      margin 0;
    }
  }

  .vertical-image-title-text {
    margin-bottom: 2em;
    * {
      text-align: center;
    }
    @media ${mediaBreakpoint.down.md} {
      font-size: 13px;
      strong {
        font-size: 15px;
      }
    }
    .gatsby-image-wrapper {
      margin: 1rem auto 1.5rem;
    }
  }

  .vertical-title-image-text {
    h3 {
      padding: 0;
      margin: 0;
    }
    * {
      text-align: center;
    }
    img {
      max-height: 120px;
      object-fit: contain;
    }
    @media ${mediaBreakpoint.down.md} {
      font-size: 13px;
    }
    .gatsby-image-wrapper {
      margin: 1rem auto 1.5rem;
    }
  }

  .title-list-items {
    ul {
      margin-bottom: 2rem;
    }
  }

  ul {
    padding-left: 1rem;
  }
`

const VITTImg = styled(Img)`
  height: 150px;
  width: 150px;
  margin-bottom: 1.5rem;
`

const StyledImg = styled(Img)`
  max-height: 400px;
`

function renderButtonGroupSection(col) {
  return (
    <Col key={col.id} xs={12} md={col.width || 6} className="">
      <ButtonGroupSection {...col} />
    </Col>
  )
}

function renderColumnContentSection(col) {
  const isVerticalImageTitleText =
    col.columnLayoutStyle === columnLayoutStyles.verticalImageTitleText

  return (
    <Col
      key={randomHex() /*col.id*/}
      xs={12}
      md={col.columnWidth || 6}
      className={`markdown-section ${col.columnLayoutStyle}`}
    >
      {col.image && isVerticalImageTitleText && (
        <VITTImg fluid={col.image.fluid} alt={col.imageAltText} imgStyle={{
          objectFit: 'scale-down'
        }}/>
      )}

      {col.textBody && (
        <div
          className="markdown-section"
          dangerouslySetInnerHTML={{
            __html: col.textBody && col.textBody.childMarkdownRemark.html,
          }}
        />
      )}

      {col.image && !isVerticalImageTitleText && (
        <StyledImg fluid={col.image.fluid} alt={col.imageAltText} imgStyle={{
          objectFit: 'contain'
        }}/>
      )}

      {col.columns && (
        <Row>
          {col.columns.map((col2, i) => (
            <Col key={col2.id} xs={12} md={col2.columnWidth || 6}>

              {col2.textBody && (
                <div
                  className="markdown-section"
                  dangerouslySetInnerHTML={{
                    __html:
                      col2.textBody && col2.textBody.childMarkdownRemark.html,
                  }}
                />
              )}

              {col2.image && (
                <Img fluid={col2.image.fluid} alt={col2.imageAltText} />
              )}
            </Col>
          ))}
        </Row>
      )}
    </Col>
  )
}

export const MultiColumnContent = ({ title, columns }) => {
  return (
    <>
      <AnchorTag title={title} />
      <Container>
        <ResponsiveContent>
          <Row>
            {columns.map((col, i) => {
              switch (col.__typename) {
                case "ContentfulColumnContentItem":
                case "ContentfulMultiColumnContentGroup":
                  return renderColumnContentSection(col)
                case "ContentfulButtonGroupSection":
                  return renderButtonGroupSection(col)
              }
            })}
          </Row>
        </ResponsiveContent>
      </Container>
    </>
  )
}
