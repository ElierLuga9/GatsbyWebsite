import { graphql } from "gatsby"

export const ButtonFragment = graphql`
  fragment ButtonFragment on ContentfulButton {
    id
    btnClasses
    linkTarget
    linkUrl
    scrollTo
    text
    variant
    variantOutline
  }
`
