import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import TrustPilot from "../components/widgets/TrustPilot"
import LegitScript from "../components/widgets/LegitScript"
import Img from "gatsby-image"
// import cards from "../images/major-credit-card-logos.png"
import styled from "styled-components"
import { mediaBreakpoint } from "../utils/breakpoints"

import { FaFacebookF, FaRegEnvelope, FaInstagram } from "react-icons/fa"

const StyledFooter = styled.footer`
  padding-top: 4rem;
  padding-bottom: 2rem;
  background-color: #f7b0c3;
  color: #fff3f6;

  a {
    color: #fff3f6;
  }

  @media ${mediaBreakpoint.down.lg} {
    font-size: 14px;
  }
`

const StyledCreditCards = styled(Img)`
  padding: 5px;
  border-radius: 5px;
  background: white;
  width: 100%;
  max-width: 200px;

  @media ${mediaBreakpoint.down.sm} {
    display: block !important;
    margin: auto;
  }
`

const SocialIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin-top: 20px;

  a {
    margin: 0 10px;
  }
`

const StyledFooterLink = styled(Link)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  display: block;
`

const StyledContainer = styled(Container)`
  max-width: 1300px;
`

const BottomLinksContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media ${mediaBreakpoint.down.md} {
    flex-direction: column;
  }

`

export default function Footer() {
  const data = useStaticQuery(graphql`
    query LinksQuery {
      shopLinks: contentfulPage(title: { eq: "Shop" }) {
        childPages {
          navTitle
          title
          slug
        }
      }
      learnLinks: contentfulPage(title: { eq: "Learn" }) {
        childPages {
          navTitle
          title
          slug
        }
      }
      cardlogos: file(relativePath: { eq: "major-credit-card-logos.png" }) {
        childImageSharp {
         fixed(width: 200, height:31) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <StyledFooter>
        <StyledContainer>
          <Row>
            <Col md={2}>
              <h5>Shop</h5>
              <ul className="list-unstyled">
                {data.shopLinks.childPages.map((page, idx) => (
                  <li key={`footer-shop-link-${idx}`}>
                    <StyledFooterLink key={page.slug} to={page.slug}>
                      {page.navTitle || page.title}
                    </StyledFooterLink>
                  </li>
                ))}
              </ul>
            </Col>
            <Col md={2}>
              <h5>Learn</h5>
              <ul className="list-unstyled">
                {data.learnLinks.childPages.map((page, idx) => (
                  <li key={`footer-learn-link-${idx}`}>
                    <StyledFooterLink key={page.slug} to={page.slug}>
                      {page.navTitle || page.title}
                    </StyledFooterLink>
                  </li>
                ))}
                <li>
                <Link key='treatment' to='treatment'>
                  Treatment
                </Link>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <h5>Press</h5>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <a
                    href="mailto:press@hellowisp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    press@hellowisp.com
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={1}>
            </Col>
            <Col md={5}>
              <Row>
                <Col>
                  <h5>Support (for non-medical questions):</h5>
                  <p>9:30a - 6:30p EST M-F</p>
                  <p>
                    <a
                      href="mailto:support@hellowisp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      support@hellowisp.com
                    </a>
                  </p>
                  <p>
                    <i>Orders will be processed within 24 hours (Even on weekends)</i>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <TrustPilot />
                  <br />
                </Col>
              </Row>

              <Row>
                <Col>
                  <LegitScript />
                </Col>
              </Row>

              <Row>
                <Col>
                  <br />
                  <StyledCreditCards style={{objectFit: 'scale-down'}} fixed={data.cardlogos.childImageSharp.fixed} alt="Credit Card Logos" />
                </Col>
              </Row>
            </Col>
            <Col>
              <SocialIconWrapper>
                <a
                  href="https://www.facebook.com/hellowisp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF alt="facebook" size="26"/>
                </a>
                <a
                  href="mailto:support@hellowisp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <FaRegEnvelope size="26"/>
                </a>

                <a
                  href="http://instagram.com/hellowisp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size="26"/>
                </a>
              </SocialIconWrapper>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="mx-auto">
              <p className="small text-center">
                *images do not feature actual patients
              </p>
              <p className="small text-center">
                If you are interested in a prescription product, wisp will
                assist in setting up a visit for you with an independent
                physician who will evaluate whether or not you are an
                appropriate candidate for the prescription product and if
                appropriate, may write you a prescription for the product which
                you can fill at the pharmacy of your choice.
              </p>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col md={8}>
              <BottomLinksContainer>
                  <span className="mr-4">
                    <Link to="/terms">Terms &amp; Conditions</Link>
                  </span>
                  <span className="mr-4">
                    <Link to="/shipping">Shipping</Link>
                  </span>
                  <span className="mr-4">
                    <Link to="/pricing">Pricing</Link>
                  </span>
                  <span className="mr-4">
                    <Link to="/privacy">Privacy Policy</Link>
                  </span>
                  <span>
                    <Link to="/coupons">Coupons</Link>
                  </span>
              </BottomLinksContainer>
            </Col>
            <Col className="text-center text-md-right" md={4}>
              © {new Date().getFullYear()} wisp, Inc. All Rights Reserved.
            </Col>
          </Row>
        </StyledContainer>
      </StyledFooter>
    </>
  )
}
