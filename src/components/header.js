import { Link } from "gatsby"
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Container, Col, Row, Navbar } from "react-bootstrap"
import Menu from "../components/Menu"
import { mediaBreakpoint } from "../utils/breakpoints"

const StyledHeader = styled.header`
  background: #fff;

  @media ${mediaBreakpoint.up.md} {
    position: relative !important;
  }
`

const BrandingLogoText = styled(Link)`
  font-size: 34px;
  letter-spacing: 0.06em;
  font-weight: 300;
  color: #000;
  font-family: "Futura PT Book";

  &:hover {
    text-decoration: none;
    color: #000;
  }

  @media ${mediaBreakpoint.down.sm} {
    font-size: 28px;
  }
`
const BrandingTagline = styled.div`
  display: inline-block;
  font-size: 1rem;
  text-align: center;
  letter-spacing: 0.05em;
  font-weight: 300;

  @media ${mediaBreakpoint.down.sm} {
    display: none;
  }
`

const StyledNavbar = styled(Navbar)`
  padding-bottom: 0;
`

const Header = ({ siteTitle }) => {
  const headerRef = useRef()

  return (
    <StyledHeader
      ref={headerRef}
      className="sticky-top"
    >
      <Container className="no-max-width">
        <Row>
          <StyledNavbar expand="md" className="w-100">
            <Navbar.Brand>
              <BrandingLogoText to="/">{siteTitle}</BrandingLogoText>
              <BrandingTagline className="mx-4 mt-2">
                Prevent outbreaks. Discreetly.
              </BrandingTagline>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Menu />
            </Navbar.Collapse>
          </StyledNavbar>
        </Row>
      </Container>
    </StyledHeader>
  )
}
export default Header
