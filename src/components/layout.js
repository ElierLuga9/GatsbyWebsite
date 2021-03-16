/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import HsaFsaHeaderBanner from "./notification-banners/hsa-fsa-header-banner"

const BrandingOffer = styled.span`
  display: block;
  background-color: #fff;
  text-align: center;
  letter-spacing: 0.05em;
  padding-bottom: 10px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <HsaFsaHeaderBanner />
      <Header siteTitle={data.site.siteMetadata.title} />

      <BrandingOffer>FIRST MONTH FREE!</BrandingOffer>
      
      <main>{children}</main>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
