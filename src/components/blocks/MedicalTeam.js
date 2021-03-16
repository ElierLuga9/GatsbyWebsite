import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import { AnchorTag } from "../../utils/AnchorTag"

export default function MedicalTeam({ title, members = [] }) {
  return (
    <div>
      <AnchorTag title={title} />
      <Container>
        <Row>
          <Col>
            <h2 className="text-center my-5">{title}</h2>
          </Col>
        </Row>

        <Row className="medical-member-info">
          {members.map(member => {
            return (
              <Col sm={6} md={3} key={`member-${member.id}`} className="medical-member">
                <Img
                  fluid={member.seoImage.image.fluid}
                  alt={member.seoImage.altText}
                  loading="lazy"
                />

                <h3 className="m-4">{member.name}</h3>
                <p>{member.shortBio.shortBio}</p>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}
