import { graphql } from "gatsby"

export const PageFragment = graphql`
  fragment PageFragment on ContentfulPage {
    id
    title
    navTitle
    titleTag
    slug
    containerClass
    description {
      description
    }
    image {
      file {
        url
      }
      fluid(maxWidth: 1920) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    useImageAsBackground
    blocks {
      ... on Node {
        id
        ... on ContentfulBanner {
          bigText {
            childMarkdownRemark {
              html
            }
          }
          subtitle
          isReversed
          bannerType
          classes
          image {
            file {
              url
            }
            fixed(width: 1920) {
              ...GatsbyContentfulFixed_withWebp
            }
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          buttons {
            ...ButtonFragment
          }
        }
        ... on ContentfulButtonGroupSection {
          width
          title
          inline
          buttons {
            ...ButtonFragment
          }
        }
        ... on ContentfulMedicalTeam {
          title
          members {
            id
            name
            seoImage {
              image {
                file {
                  url
                }
                fluid(maxWidth: 1920) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              altText
            }
            shortBio {
              shortBio
            }
          }
        }
        ... on ContentfulHowItWorks {
          title
          isMens
          pageType
        }
        ... on ContentfulProductGroup {
          title
          containerId
          products {
            id
            title
            titleTag
            slug
            image {
              file {
                url
              }
              fluid(maxWidth: 1920) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            imageAltText
            price
            description {
              description
            }
            disclaimer {
              disclaimer
            }
          }
        }
        ... on ContentfulPageTitle {
          title
          headingType
          seoImage {
            image {
              file {
                url
              }
              fluid(maxWidth: 1920) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            altText
          }
        }
        ... on ContentfulGenericContent {
          title
          subtitle
          body {
            childMarkdownRemark {
              html
            }
          }
          seoImage {
            image {
              file {
                url
              }
              fluid(maxWidth: 1920) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            altText
          }
          imageBackgroundSize
          backgroundColor
          fluid
          reversed
        }
        ... on ContentfulAccordionGroup {
          accordions {
            actionText
            accordionBody {
              json
            }
          }
        }
        ... on ContentfulBlogGroup {
          posts {
            title
            titleTag
            slug
            introduction {
              introduction
            }
            authorName
            date
            image {
              file {
                url
              }
              fluid(maxWidth: 1920) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            imageAltText
            body {
              childMarkdownRemark {
                html
              }
            }
          }
        }
        ... on ContentfulMultiColumnContentGroup {
          title
          columns {
            ... on Node {
              ... on ContentfulColumnContentItem {
                id
                textBody {
                  childMarkdownRemark {
                    html
                  }
                }
                image {
                  file {
                    url
                  }
                  fluid(maxWidth: 1920) {
                    ...GatsbyContentfulFluid_withWebp
                  }
                }
                imageAltText
                columnWidth
                columnLayoutStyle
              }
              ... on ContentfulMultiColumnContentGroup {
                title
                columns {
                  ... on Node {
                    ... on ContentfulColumnContentItem {
                      id
                      textBody {
                        childMarkdownRemark {
                          html
                        }
                      }
                      image {
                        file {
                          url
                        }
                        fluid(maxWidth: 1920) {
                          ...GatsbyContentfulFluid_withWebp
                        }
                      }
                      imageAltText
                      columnWidth
                    }
                  }
                }
              }
              ... on ContentfulButtonGroupSection {
                id
                width
                title
                inline
                buttonStyle
                buttons {
                  ...ButtonFragment
                }
              }
            }
          }
        }
        ... on ContentfulTextBanner {
          title
          containerClass
          reversed
          body {
            childMarkdownRemark {
              html
            }
          }
          buttons {
            ...ButtonFragment
          }
          variant
          image {
            file {
              url
            }
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          imageAltText
          richTextBody {
            json
          }
        }
        ... on ContentfulIframe {
          title
          containerClass
          iframeSrc
        }
        ... on ContentfulSpacer {
          size
          withLine
        }
        ... on ContentfulSeoImage {
          image {
            file {
              url
            }
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          altText
          containerClasses
        }
        ... on ContentfulButton {
          id
          btnClasses
          linkTarget
          linkUrl
          scrollTo
          text
          variant
          variantOutline
        }
        ... on ContentfulGatherContactInfo {
          title
          postEndpoint
          infoText {
            childMarkdownRemark {
              html
            }
          }
          image {
            file {
              url
            }
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          imageAltText
        }
        ... on ContentfulProduct {
          ...ProductFragment
        }
      }
    }
    bottomLinkMainText
    bottomLinkSubtext
    bottomLinkUrl
    bottomLinkImage {
      file {
        url
      }
      fluid(maxWidth: 1920) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    bottomLinkImageAltText
    footerBanner
  }
`
