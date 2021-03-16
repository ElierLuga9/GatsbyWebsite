import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

import { AnchorTag } from "../../utils/AnchorTag"

import choose from "../../images/icons/choose.png"
import review from "../../images/icons/review.png"
import ship from "../../images/icons/ship.png"

import mensChoose from "../../images/icons/mens/choose.png"
import mensReview from "../../images/icons/mens/review.png"
import mensShip from "../../images/icons/mens/ship.png"

const StyledHeader = styled.h3`
  font-size: 22px;
  margin-top: 2em;
  margin-bottom: 1em;
`

const pageTypeConfig = {
  'online-consultation': {
    subtitle: '(goodbye urgent care)',
    step1: {
      title: '1. Tell Us What You’re Experiencing',
      text: 'Answer a few questions to let the dr know your symptoms',
    },
    step2: {
      title: '2. Our Doctors Review',
      text: 'Within 24 hours a U.S. licensed physician will follow up by phone or secure chat and write a prescription (when safe and appropriate)',
    },
    step3: {
      title: '3. Same Day Pick Up',
      text: 'Your prescription will be sent to the pharmacy of your choice for pick up',
    },
    addFourthSection: false,
  },
  'covid-test': {
    subtitle: '(goodbye worrying)',
    step1: {
      title: '1. Order A Lab Request',
      text: 'Answer a few questions and let the dr know where you’d like to go in to get tested',
    },
    step2: {
      title: '2. Our Doctors Review',
      text: 'Within 24 hours a U.S. licensed physician will follow up by secure chat with your Lab Request (when safe and appropriate)',
    },
    step3: {
      title: '3. Get Results',
      text: 'Bring your Lab Request to the <a href="https://appointment.questdiagnostics.com/patient/findlocation" target="_blank">Quest</a> or <a href="https://www.labcorp.com/labs-and-appointments-advanced-search" target="_blank">LabCorp</a> lab location of your choice to get tested. Get your results online.',
    },
    addFourthSection: false,
  },
  home: {
    subtitle: '(goodbye doctor visits)',
    step1: {
      title: '1. Choose Your Meds',
      text: 'Decide what\'s right for you and complete a quick, private, 2 minute online form',
    },
    step2: {
      title: '2. Our Doctors Review',
      text: 'Within 24 hours a U.S. licensed physician will follow up and write a prescription (when safe and appropriate)',
    },
    step3: {
      title: '3. Delivered Free | Same Day Pick Up',
      text: 'Our partner pharmacy will ship it in discreet packaging to your door (or send it to your pharmacy) every 3 months (or one-time)',
    },
    addFourthSection: true,
  }
}

export default function HowItWorks({ isMens, pageType }) {
  const blockData = pageTypeConfig[(pageType || 'home')]

  return (
    <div style={{ textAlign: "center" }}>
      <AnchorTag title='How it Works' />
      <Container>
        <Row>
          <Col>
            <h2 className=" mt-5 mb-2">How it Works</h2>
            <p>{blockData.subtitle}</p>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <img
              src={isMens ? mensChoose : choose}
              className="img-fluid d-block mx-auto"
              alt="Fill this out later"
            />
            <StyledHeader>{blockData.step1.title}</StyledHeader>
            <p dangerouslySetInnerHTML={{__html: blockData.step1.text}} />
          </Col>
          <Col sm={4}>
            <img
              src={isMens ? mensReview : review}
              className="img-fluid d-block mx-auto"
              alt="Fill this out later"
            />
            <StyledHeader>{blockData.step2.title}</StyledHeader>
            <p dangerouslySetInnerHTML={{__html: blockData.step2.text}} />
          </Col>
          <Col sm={4}>
            <img
              src={isMens ? mensShip : ship}
              className="img-fluid d-block mx-auto"
              alt="Fill this out later"
            />
            <StyledHeader>{blockData.step3.title}</StyledHeader>
            <p dangerouslySetInnerHTML={{__html: blockData.step3.text}} />
          </Col>
        </Row>
        {blockData.addFourthSection && (
          <Row>
            <Col>
              <p>+</p>
              <StyledHeader>24/7 Medical Support</StyledHeader>
              <p>Chat with our pharmacist or medical team anytime</p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  )
}
