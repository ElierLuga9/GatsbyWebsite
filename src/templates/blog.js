import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import SEO from "../components/seo"
import styled from "styled-components"
import moment from "moment"

import SocialShare from "../components/SocialShare"
import { mediaBreakpoint } from "../utils/breakpoints"

const AuthorDate = styled.div`
  text-align: center;
  font-size: 14px;
  margin: 3em 0;
`

const StyledSocialShare = styled(SocialShare)`
  margin: 2.5em;
`

const StyledContainer = styled(Container)`
  h3 {
    margin-top: 1.25em;
    margin-bottom: 0.75em;
  }

  h4 {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  .display-1 {
    text-align: center;
  }

  .markdown-section {
    li {
      margin-bottom: 1em;
    }
  }

  .blog-image {
    margin: 2.5em 1em;
  }

  .blog-body {
    margin: 2em;
  }

  .social-share-container {
    margin: 3em 0;
  }

  @media ${mediaBreakpoint.down.lg} {
    .display-1 {
      font-size: 2.5em;
    }
    .blog-image {
      margin: 2em 1.5em;
    }
    .blog-body {
      margin: 1.5em;
    }
  }

  @media ${mediaBreakpoint.down.sm} {
    .display-1 {
      font-size: 2em;
    }
    .blog-image {
      margin: 1.5em 1em;
    }
    .blog-body {
      margin: 1em;
    }
  }
`

const StyledLink = styled(Link)`
  margin-bottom: 0.5em;
  &:hover {
    text-decoration: none !important;
  }

  * {
    color: #000;

    &:hover {
      text-decoration: none !important;
      color: #000;
    }
  }
`

const PrevNextContainer = styled.div`
  margin: 1.5em;

  h4 {
    font-size: 1.3em;
    margin-top: 10px;
    margin-bottom: 2em;
  }

  .thin {
    font-weight: 300;
  }

  .prev-post {
    width: 50%;
    float: left;
  }

  .next-post {
    width: 50%;
    float: right;
    text-align: right;
  }

  @media ${mediaBreakpoint.down.md} {
    h4 {
      font-size: 20px;
    }
    .thin {
      font-size: 13px;
    }
  }

  @media ${mediaBreakpoint.down.sm} {
    h4 {
      font-size: 14px;
    }
    .thin {
      font-size: 12px;
    }
  }
`

export default function BlogPost({ data: { contentfulBlogPost } }) {
  const {
    authorName,
    body,
    date,
    image,
    imageAltText,
    metaDescription,
    nextPost,
    previousPost,
    slug,
    title,
    titleTag,
  } = contentfulBlogPost

  const styledDate = moment(date).format("MMMM D, YYYY")

  return (
    <>
      <SEO
        title={titleTag}
        image={image}
        description={metaDescription && metaDescription.metaDescription}
      />
      <Layout>
        <StyledContainer>
          <Row>
            <Col xs={12} sm={12} md={9} className="mx-auto">
              <AuthorDate>
                {authorName} - {styledDate}
              </AuthorDate>
              <h1 className="display-1">{title}</h1>
              <Img
                fluid={image.fluid}
                className="blog-image"
                alt={imageAltText}
              />
              <div className="blog-body">
                <div
                  className="markdown-section"
                  dangerouslySetInnerHTML={{
                    __html: body && body.childMarkdownRemark.html,
                  }}
                />
              </div>

              <div className="social-share-container">
                <StyledSocialShare
                  page={`https://www.hellowisp/blog/${slug}`}
                />
              </div>

              {(previousPost || nextPost) && (
                <PrevNextContainer>
                  {previousPost && (
                    <StyledLink
                      className="prev-post"
                      to={`/blog/${previousPost.slug}`}
                    >
                      <div className="thin">previous</div>
                      <h4>{previousPost.title}</h4>
                    </StyledLink>
                  )}
                  {nextPost && (
                    <StyledLink
                      className="next-post"
                      to={`/blog/${nextPost.slug}`}
                    >
                      <div className="thin">next</div>
                      <h4>{nextPost.title}</h4>
                    </StyledLink>
                  )}
                </PrevNextContainer>
              )}
            </Col>
          </Row>
        </StyledContainer>
      </Layout>
    </>
  )
}

export const query = graphql`
  query BlogPost($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      title
      titleTag
      metaDescription {
        metaDescription
      }
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
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      imageAltText
      body {
        childMarkdownRemark {
          html
        }
      }
      previousPost {
        title
        slug
      }
      nextPost {
        title
        slug
      }
    }
  }
`
