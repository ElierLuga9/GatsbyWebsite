/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

function SEO({ description, lang, meta, title, image, doNotIndex }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
            image
          }
        }
      }
    `
  )

  const { pathname } = useLocation()

  const metaDescription = description || site.siteMetadata.description
  const metaImage =
    (image && image.file.url) ||
    `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`

  const noIndex = doNotIndex ? 'noindex' : 'index'

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `robots`,
          content: noIndex,
        },
        {
          name: `image`,
          content: metaImage,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          name: `og:url`,
          content: `${site.siteMetadata.url}${pathname}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:image`,
          content: metaImage,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name:`ahrefs-site-verification`,
          content:`cdaf668e1d361a866542c894e311d484ca129e316695b7099cc847a630bbf395`,
        }
      ].concat(meta)}
    >
      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "url": "https://www.hellowisp.com/",
          "name": "wisp",
          "description": "Prevent outbreaks. Discreetly."
        }
      `}</script>

      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": "wisp",
          "legalName":"wisp, Inc.",
          "email":"support@hellowisp.com",
          "url": "https://www.hellowisp.com",
          "logo": "https://wisp-public-images.s3.amazonaws.com/pink_logo.png",
          "sameAs": [
            "https://www.facebook.com/hellowisp/",
            "http://instagram.com/hellowisp"
          ]
        }
      `}</script>
      <link
        rel="preload"
        as="font"
        href="/fonts/FuturaPT-Bold.ttf"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/fonts/FuturaPT-Book.ttf"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/fonts/FuturaPT-Demi.ttf"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/fonts/FuturaPT-Medium.ttf"
        type="font/ttf"
        crossOrigin="anonymous"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
