import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { AnchorTag } from '../../utils/AnchorTag'
import { mediaBreakpoint } from '../../utils/breakpoints'
const urlSlug = require("url-slug")

function randomHex() {
  return Math.random().toString(36).substring(2, 8);
}

const StyledListGroup = styled.div`
  @media ${mediaBreakpoint.down.md} {
    h2 {
      font-size: 20px;
    }
    .list-group-title {
      height: 60px;
    }
  }
`

const StyledRow = styled(Row)`
  justify-content: center;
`

export default function ListGroup({ title = "Product Group", products = [], containerId }) {
  return (
    <StyledListGroup>
      <AnchorTag title={containerId || title} />
      <Container>
        <StyledRow>
          {products.map(product => (
            <ListGroupProduct key={`${randomHex()}-${product.id}`} product={product} />
          ))}
        </StyledRow>
      </Container>
    </StyledListGroup>
  )
}

function ListGroupProduct({ product }) {
  const slug = product.slug || urlSlug(product.title);

  const StyledLink = styled(Link)`
    display: block;

    .gatsby-image-wrapper {
      transition: all 0.5s ease;
      transform: scale(0.75);
    }
    &:hover {
      .gatsby-image-wrapper {
        transform: scale(0.8);
      }
      text-decoration: none;
    }
  `

  return (
    <Col xs={12} sm={6} md={4} className="text-center pt-0 px-4 list-group-product">
      <StyledLink to={`/products/${slug}`}>
        {product.image && <Img fluid={product.image.fluid} alt={product.imageAltText} />}

        <h3>{product.title}</h3>
        <p>{product.price}</p>

        <Row>
          <Col md={10} lg={8} xl={6} className="mx-auto no-padding">
            <Button variant="outline-dark" className="btn-block">
              GET STARTED
            </Button>
          </Col>
        </Row>

        <br />
        <p className="disclaimer">
          {product.disclaimer && product.disclaimer.disclaimer}
        </p>
      </StyledLink>
    </Col>
  )
}
