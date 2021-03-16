import { graphql } from "gatsby"

export const ProductFragment = graphql`
  fragment ProductFragment on ContentfulProduct {
    id
    title
    titleTag
    slug
    image {
      file {
        url
      }
      fluid(maxWidth: 662) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    openGraphImage {
      file {
        url
      }
      fluid(maxWidth: 662) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    metaDescription {
      metaDescription
    }
    imageAltText
    price
    description {
      description
    }
    disclaimer {
      disclaimer
    }
    iframeUrl
    alternateProducts {
      title
      slug
      price
      image {
        file {
          url
        }
        fluid(maxWidth: 300) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    alternateProductMessage
    productFlowId
    noindex
  }
`
