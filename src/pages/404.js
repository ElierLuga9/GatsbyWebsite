import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container className="py-5">
      <h1>404 Error</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default NotFoundPage
