import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

export default function NewsletterSignup() {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h2 className=" my-4">Newsletter Sign Up</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <input />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="outline-primary" href="/" className="my-3">
            Subscribe
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
