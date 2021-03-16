import React, { useRef } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import IframeResizer from 'iframe-resizer-react'
import { Container, Row, Col } from "react-bootstrap"
import styled from 'styled-components'
import { AnchorTag } from '../../utils/AnchorTag'
import urlSlug from 'url-slug'

const StyledContainer = styled(Container)`
  padding: 0 40px;
  margin: 80px auto;
  max-width: 1000px;

  .alt-product {
    margin-bottom: 2rem;
  }
  .alt-product-text {
    font-size: 13px;
    padding-left: 10px;
  }
`

const StyledLink = styled(Link)`
  color: #222;
`

export const Product = ({ alternateProductMessage, alternateProducts, description, iframeUrl, image, imageAltText }) => {
  const iframeRef = useRef(null)

  return (
    <StyledContainer>
      <AnchorTag title="product-block"/>
      <Row>
        <Col sm={6}>{image && <Img fluid={image.fluid} alt={imageAltText}/>}</Col>
        <Col sm={6}>
          <IframeResizer
            forwardRef={iframeRef}
            heightCalculationMethod="lowestElement"
            inPageLinks
            log
            src={iframeUrl}
            style={{ width: '1px', minWidth: '100%', marginBottom: '2rem'}}
            title="product-iframe"
            scrolling="no"
            name="ss"
            frameBorder="0"
          />

          { alternateProductMessage && <p>{alternateProductMessage}</p> }

          {alternateProducts && (
            <Row className="m-0">
              {alternateProducts.map((altProduct, idx) => {
                const productSlug = altProduct.slug || urlSlug(altProduct.title)

                return (
                  <Col xs={6} className="alt-product" key={`alt-product-${idx}`}>
                    <Row>
                      <Col className="no-padding" xs={3}>
                        <StyledLink to={`/products/${productSlug}`}>
                          {altProduct.image && <Img fluid={altProduct.image.fluid} />}
                        </StyledLink>
                      </Col>
                      <Col className="no-padding alt-product-text" xs={9}>
                        <StyledLink to={`/products/${productSlug}`}>
                          <div>{altProduct.title}</div>
                          <div>{altProduct.price}</div>
                        </StyledLink>
                      </Col>
                    </Row>
                  </Col>
                )
              })}
            </Row>
          )}

          {description && <p>{description.description}</p>}
        </Col>
      </Row>
    </StyledContainer>
  )
}
