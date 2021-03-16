import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Container, Accordion } from "react-bootstrap"
import styled from "styled-components"
import { mediaBreakpoint } from '../../utils/breakpoints'

const StyledAccordion = styled(Accordion)`
  padding: 0 3rem;

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

  .accordion-body {
    font-weight: 300;
  }
`

const StyledToggle = styled.h1`
  cursor: pointer;

  @media ${mediaBreakpoint.down.md} {
    font-size: 1.5rem;
  }
`

export const AccordionGroup = ({ accordions }) => {
  return (
    <Container className="my-5">
      {accordions.map(a => (
        <StyledAccordion key={a.actionText}>
          <div>
            <Accordion.Toggle as={StyledToggle} variant="link" eventKey="0">
              {`+ ${a.actionText}`}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" className="accordion-body">
                <div>{a.accordionBody && documentToReactComponents(a.accordionBody.json)}</div>
            </Accordion.Collapse>
          </div>
        </StyledAccordion>
      ))}
    </Container>
  )
}
