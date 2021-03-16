import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import moment from 'moment'

export const BlogList = ({ posts = [] }) => {
  return (
    <Container>
      <Row>
        {posts.map((post, idx) => (
          <BlogListItem key={`post-${idx}`} post={post} />
        ))}
      </Row>
    </Container>
  )
}

const ListItemTitle = styled.h2`
  text-align: center;
  margin-bottom: 0.5em;

  * {
    text-align: center;
    font-size: 1.5rem;
    color: #000;
    &:hover {
      text-decoration: none;
      color: #000;
    }
  }
`

const StyledSmall = styled.div`
  text-align: center;
  font-size: 0.85em;
  font-weight: 300;
`

const StyledImg = styled(Img)`
  height: 15em;
  width: 100%;
  margin: 1em auto;
`

const StyledCol = styled(Col)`
  margin-bottom: 3em;
`

const BlogListItem = ({ post }) => {
  const styledDate = moment(post.date).format('MMMM D, YYYY')
  const fullUrl = `/blog/${post.slug}`
  return (
    <StyledCol xs={12} sm={6} md={4}>
      <Link to={fullUrl}>
        <StyledImg fluid={post.image.fluid} alt={post.imageAltText}/>
      </Link>
      <ListItemTitle>
        <Link to={fullUrl}>{post.title}</Link>
      </ListItemTitle>
      <p>{post.introduction.introduction} <Link to={fullUrl}>Read More →</Link></p>
      <StyledSmall>{post.authorName} - {styledDate}</StyledSmall>
    </StyledCol>
  )
}
