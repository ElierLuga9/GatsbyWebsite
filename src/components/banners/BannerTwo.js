import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Col } from 'react-bootstrap'
import { mediaBreakpoint } from '../../utils/breakpoints'
import { ButtonFactory } from '../buttons/ButtonFactory'


const StyledBackgroundSection = styled(BackgroundImage)`
  margin-bottom: 100px;
  max-height: 600px;

  @media ${mediaBreakpoint.down.lg} {
    margin-bottom: 16em;

    &.banner-secondary.text-primary:before {
      background-color: rgba(253, 249, 250, 0.9);
    }

    &.pesky-cold-sore:before {
      background-position-x: 0% !important;
    }
  }
  @media ${mediaBreakpoint.down.md} {
    margin-bottom: 250px;
    &.pesky-cold-sore:before {
      background-position-x: 15% !important;
    }
  }
  @media ${mediaBreakpoint.down.sm} {
    max-height: 400px;
    margin-bottom: 150px;

  }


  // MENS
  &.mens-banner-2 {
    background-color: rgba(249, 249, 251);

    margin-bottom: 0;

    * {
      color: #87a5ad !important;
    }

    .btn.btn-primary {
      color: #fff !important;
      background-color: #87a5ad !important;
      border-color: #87a5ad !important;
    }

    &:before, &:after {
      background-position-y: top !important;
    }

    &.bg-position-x-right:before {
      background-position-x: right !important;
    }

    @media ${mediaBreakpoint.down.sm} {
      &:before, &:after {
        background-position-x: 10% !important;
      }

      &.bg-position-x-right:before {
        background-position-x: right !important;
      }
    }
    @media ${mediaBreakpoint.down.lg} {
      .banner-two {
        padding-top: 6em;
        margin-bottom: 6em;
      }
    }

    .banner-text-wrapper-col {
      margin: 120px 40px;
      padding: 20px;
      background-color: rgba(249, 249, 252, 0.75);
      z-index: 100;

      @media ${mediaBreakpoint.up.lg} {
        max-width: 500px;
      }
      @media ${mediaBreakpoint.down.lg} {
        background-color: rgba(255, 255, 255, 1);
        margin: auto;
        bottom: -165px;
        position: relative;
      }
      @media ${mediaBreakpoint.down.sm} {
        bottom: unset;
      }
    }
  }
`

const BannerTextWrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;

  h2 {
    font-weight: 300;
    font-size: 2.5rem;
  }

  .lead {
    font-size: 1.1rem;
  }

  .banner-text-wrapper {
    background-color: transparent;
  }

  .banner-text-wrapper-col {
    margin-top: 120px;
    margin-bottom: 120px;
    padding: 20px;
    background-color: rgba(253, 249, 250, 0.9);
  }

  @media ${mediaBreakpoint.up.lg} {
    padding-bottom: 80px;
  }

  @media ${mediaBreakpoint.down.lg} {
    margin-bottom: 18em;

    .banner-text-wrapper-col {
      margin 280px auto 120px;
    }
  }

  @media ${mediaBreakpoint.down.md} {
    h1, h2 {
      font-size: 36px;
    }
    padding-top: 60px;
    padding-bottom: 60px;

    .banner-text-wrapper-col {
      margin 320px auto 120px;
    }
  }

  @media ${mediaBreakpoint.down.sm} {
    padding-top: 40px;
    h1, h2 {
      font-size: 28px;
    }
    .banner-text-wrapper {
      justify-content: center !important;
      position: relative;
      top: 9em;
    }
    .banner-text-wrapper-col {
      background-color: rgba(253, 249, 250, 1);
      padding: 20px;
      margin 120px auto 120px;
    }
  }
`

function BannerTwo({
  bigText = 'Fallback Title',
  subtitle,
  image,
  buttons = [],
  isReversed = false,
  classes,
}) {
  return (
    <StyledBackgroundSection
      Tag='section'
      fluid={image && image.fluid}
      className={`banner-secondary text-primary ${(classes || []).join(' ')}`}
    >
      <BannerTextWrapper className="banner-two">
        <div
          className={`d-flex ${isReversed ? 'justify-content-end' : ''} banner-text-wrapper`}
        >
          <Col xs={12} sm={8} md={7} lg={5} className='banner-text-wrapper-col'>
            <div
              dangerouslySetInnerHTML={{
                __html: bigText && bigText.childMarkdownRemark.html,
              }}
            />
            <p className='lead'>{subtitle}</p>
            {(buttons || []).map(button => (
              <ButtonFactory key={button.id} {...button} className='mr-2' />
            ))}
          </Col>
        </div>
      </BannerTextWrapper>
    </StyledBackgroundSection>
  )
}

export default BannerTwo
