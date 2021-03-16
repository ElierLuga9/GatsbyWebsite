import React, { useRef } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import IframeResizer from 'iframe-resizer-react'
import { Container, Row, Col } from "react-bootstrap"
import styled from 'styled-components'
import urlSlug from 'url-slug'

import Layout from "../components/layout"
import SEO from "../components/seo"

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

export default ({ data: { contentfulProduct } }) => {
  const iframeRef = useRef(null)

  const {
    alternateProductMessage,
    alternateProducts,
    description,
    iframeUrl,
    image,
    imageAltText,
    metaDescription,
    noindex,
    productFlowId,
    openGraphImage,
    title,
    titleTag,
  } = contentfulProduct


  // const productFlowConfig = {
  //   product_selection_hsv_pills_pain_cream_v1: <SomeFlowReactComponent />,
  //   second_flow_id: <SomeOtherFlowReactComponent />,
  // }

  // console.log('productFlowId')
  // console.log(productFlowId)

  return (
    <>
      <SEO
        title={titleTag}
        description={metaDescription && metaDescription.metaDescription}
        image={openGraphImage || image}
        doNotIndex={noindex}
      />
      <Layout>
        <StyledContainer>
          <Row>
            <Col sm={6}>{image && <Img fluid={image.fluid} alt={imageAltText}/>}</Col>
            <Col sm={6}>

              { /*productFlowConfig[productFlowId]*/ }

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
      </Layout>
    </>
  )
}

export const query = graphql`
  query Product($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      ...ProductFragment
    }
  }
`
