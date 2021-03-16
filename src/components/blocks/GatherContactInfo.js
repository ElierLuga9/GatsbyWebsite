import React from "react"
import { Container, Col, Form, Button } from "react-bootstrap"
import BackgroundImage from 'gatsby-background-image'
import styled from "styled-components"
import { AnchorTag } from "../../utils/AnchorTag"
import { mediaBreakpoint } from '../../utils/breakpoints'

const StyledBodyContainer = styled.div`
  padding: 2rem 3rem 0;

  font-weight: 300;

  h2 {
    margin-bottom: 1rem;
  }

  @media ${mediaBreakpoint.down.lg} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media ${mediaBreakpoint.down.md} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media ${mediaBreakpoint.down.sm} {
    padding-left: 0;
    padding-right: 0;
  }
`

const StyledBackgroundSection = styled(BackgroundImage)`
  background-size: cover;
  background-position-x: 92%;
  background-position-y: 95%;

  @media ${mediaBreakpoint.down.sm} {
    &:before {
      // background-position-x: 88% !important;
    }
  }
`

const ErrorText = styled(Form.Text)`
  color: #333;
`

const StyledForm = styled(Form)`
  padding: 1rem 0 16rem;
  input, button {
    border-radius: 10px;
  }
  input {
    font-size: 14px;

    &::placeholder {
      color: #ddd;
    }
  }
  button {
    margin-top: 1rem;
  }
  .form-label {
    margin-bottom: 0.25em;
  }
  small.subtext {
    margin: 0 0 0.5em;
    font-weight: 300;
    font-size: 12px;
  }
  @media ${mediaBreakpoint.down.sm} {
    padding-bottom: 24rem;
  }
`

export class GatherContactInfo extends React.Component {
  state = {
    firstName: '',
    email: '',
    phone1: '',
    phone2: '',
    phone3: '',
    errors: {},
  }

  formIsValid = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { firstName, email, phone1, phone2, phone3 } = this.state;
    const errors = {};

    errors.firstName = firstName.length ? null : 'Name is a required field';
    errors.email = emailRegex.test(email) ? null : 'Please enter a valid email';
    errors.phone = `${phone1}${phone2}${phone3}`.length === 10 && !isNaN(Number(`${phone1}${phone2}${phone3}`)) ? null : 'Please enter a valid phone number'

    if (Object.values(errors).filter(x => x).length) {
      this.setState({ errors });
      return false;
    } else {
      return true;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { postEndpoint } = this.props;
    const { firstName, email, phone1, phone2, phone3 } = this.state;
    if (this.formIsValid()) {
      fetch(`https://secure.hellowisp.com${postEndpoint}`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: firstName,
          email: email,
          phone: `(${phone1}) ${phone2}-${phone3}`,
        }),
      }).then(res => {

      });
    }
  }

  render() {
    const { title, image, infoText } = this.props;
    const { errors } = this.state;

    return (
      <StyledBackgroundSection
        Tag='section'
        fluid={image && image.fluid}
        className={'banner-primary text-white'}
      >
        <AnchorTag title={title} />
        <Container>
          <StyledBodyContainer>
            <div
              className="markdown-section"
              dangerouslySetInnerHTML={{
                __html: infoText && infoText.childMarkdownRemark.html,
              }}
            />
            <StyledForm onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} sm="6" md="4" lg="3" controlId="name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    value={this.state.firstName}
                    onChange={(e) => {
                      this.setState({
                        firstName: e.target.value,
                        errors: { ...errors, firstName: null } })
                    }}
                  />
                  <ErrorText>{errors.firstName}</ErrorText>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} sm="6" md="4" lg="3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Text className="subtext">
                    We will never ever share your email. Ever.
                  </Form.Text>
                  <Form.Control
                    value={this.state.email}
                    onChange={(e) => {
                      this.setState({
                        email: e.target.value,
                        errors: { ...errors, email: null } })
                    }}
                  />
                  <ErrorText>{errors.email}</ErrorText>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} sm="6" md="4" lg="3" controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Text className="subtext">
                    We will never ever share your phone number. Ever.
                  </Form.Text>
                  <Form.Row>
                    <Col xs={3}>
                      <Form.Control
                        value={this.state.phone1}
                        placeholder="###"
                        onChange={(e) => {
                          this.setState({
                            phone1: e.target.value,
                            errors: { ...errors, phone: null } })
                        }}
                        maxLength="3"
                      />
                    </Col>
                    <Col xs={3}>
                      <Form.Control
                        value={this.state.phone2}
                        placeholder="###"
                        onChange={(e) => {
                          this.setState({
                            phone2: e.target.value,
                            errors: { ...errors, phone: null } })
                        }}
                        maxLength="3"
                      />
                    </Col>
                    <Col xs={4}>
                      <Form.Control
                        value={this.state.phone3}
                        placeholder="####"
                        onChange={(e) => {
                          this.setState({
                            phone3: e.target.value,
                            errors: { ...errors, phone: null } })
                        }}
                        maxLength="4"
                      />
                    </Col>
                  </Form.Row>
                  <ErrorText>{errors.phone}</ErrorText>
                </Form.Group>
              </Form.Row>
              <Button variant="outline-light" type="submit">Submit</Button>
            </StyledForm>
          </StyledBodyContainer>
        </Container>
      </StyledBackgroundSection>
    )
  }
}
