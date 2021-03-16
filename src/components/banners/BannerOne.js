import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { mediaBreakpoint } from '../../utils/breakpoints'
import { ButtonFactory } from '../buttons/ButtonFactory'

const StyledBackgroundSection = styled(BackgroundImage)`
  width: 100%;
  background-size: cover;
  background-position: bottom;

  h1 {
    max-width: 600px;
    font-size: 64px;
    line-height: 1;
    font-weight: 300;
  }

  .subtitle {
    font-weight: 300;
  }

  @media ${mediaBreakpoint.down.sm} {
    .button-container {
      display: block;
    }
  }

  &.shop-page {
    // Make BannerOne take up whole screen height
    max-height: 85vh;
    max-width: 100vw;
    padding: 5vw 5vw 8vw;

    h1 {
      color: #fff;
      font-weight: 400;
    }
    .subtitle {
      color: #fff;
    }

    &:before, &:after {
      background-position-y: 97% !important;
      background-size: contain;
      width: 100vw !important;
    }

    @media ${mediaBreakpoint.down.md} {
      max-height: unset !important;
      height: 88vh !important;
      background-size: unset;
      &:before, &:after {
        height: 87vh !important;
        background-size: 180% !important;
        width: 100vw !important;
        background-position: unset !important;
        background-position-y: 100% !important;
        background-position-x: 90% !important;
      }
    }
  }

  &.banner-primary {
    display: flex;
    align-items: center;
    padding: 10vw;

    &.homepage {
      padding-bottom: 32vh;
    }

    @media ${mediaBreakpoint.down.md} {
      padding: 5vw;
      padding-left: 8vw;
      max-height: 400px;
    }
  }

  &.online-consultation {
    &:before, &:after {
      background-position: unset;
      background-position-y: 65% !important;
      @media ${mediaBreakpoint.down.sm} {
        background-position-x: 10% !important;
      }
    }
  }

  &.image-top {
    &:before, &:after {
      background-position: unset;
      background-position-y: top !important;
    }
  }

  &.image-bottom {
    &:before, &:after {
      background-position: unset;
      background-position-y: bottom !important;
    }
  }

  &.homepage {
    max-height: 85vh;
    &:before, &:after {
      @media ${mediaBreakpoint.down.sm} {
        background-position-x: 90% !important;
      }
    }
    @media ${mediaBreakpoint.down.md} {
      max-height: 86vh;
      padding: 5vw;
      padding-left: 8vw;
    }
  }

`

const BannerTextWrapper = styled.div`

  .lead {
    font-weight: 300;
    font-size: 1.3rem;
    @media ${mediaBreakpoint.down.sm} {
      font-style: normal;
      font-size: 21px;
      letter-spacing: 0.02em;
    }
  }


  @media ${mediaBreakpoint.down.md} {
    h1, h2 {
      font-size: 36px;
    }
    padding-top: 60px;
    padding-bottom: 80px;
  }

  @media ${mediaBreakpoint.down.sm} {
    h1 {
      font-size: 2.3em;
      font-weight: 400;
    }
    h2 {
      font-size: 28px;
    }
    padding-top: 120px;
  }
`

function BannerOne({
  bigText = 'Fallback Title',
  subtitle,
  image,
  buttons = [],
  isReversed = false,
  classes,
}) {
  const bgProps = {
    Tag: 'section',
    className: `banner-primary ${(classes || ['text-white homepage']).join(' ')}`,
  }

  if (classes && classes.includes('shop-page')) {
    bgProps.fixed = image && image.fixed
  } else {
    bgProps.fluid = image && image.fluid
  }

  return (
    <StyledBackgroundSection {...bgProps}>
      <BannerTextWrapper>
        <div
          className={`no-max-width d-flex ${isReversed ? 'justify-content-end' : ''}`}
        >
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: bigText && bigText.childMarkdownRemark.html,
              }}
            />
            <p className='lead subtitle'>{subtitle}</p>
            {buttons &&
              buttons.map(button => {
                return (
                  <span key={button.id} className='button-container'>
                    <ButtonFactory {...button} className='mr-2' />
                  </span>
                )
              })}
          </div>
        </div>
      </BannerTextWrapper>
    </StyledBackgroundSection>
  )
}

export default BannerOne
