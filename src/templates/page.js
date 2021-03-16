import React from 'react'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import blockFactory from "../components/blocks/blockFactory"
import { ImageWithColoredLinkBox } from '../components/blocks/ImageWithColoredLinkBox'
import SymptomsQuizFooterBanner from '../components/notification-banners/symptoms-quiz-footer-banner'
import { mediaBreakpoint } from "../utils/breakpoints"

const footerBanners = {
  'symptoms-quiz': SymptomsQuizFooterBanner,
};

export default function page({ data: { contentfulPage } }) {
  const {
    blocks: b,
    bottomLinkImage,
    bottomLinkImageAltText,
    bottomLinkMainText,
    bottomLinkSubtext,
    bottomLinkUrl,
    containerClass,
    description,
    footerBanner,
    image,
    titleTag,
    useImageAsBackground,
    doNotIndex,
  } = contentfulPage
  const blocks = blockFactory(b)

  const FooterBanner = footerBanners[footerBanner] || null

  if (useImageAsBackground) {
    const StyledBackgroundSection = styled(BackgroundImage)`
      background-size: cover;
      padding-top: 3rem;
      padding-bottom: 7rem;

      @media ${mediaBreakpoint.up.md} {
        background-position-x: 92%;

        &:before, &:after {
          background-position-x: 92% !important;
        }
      }

      @media ${mediaBreakpoint.down.md} {
        background-position-x: 54% !important;

        &:before, &:after {
          background-position-x: 54% !important;
        }
      }

      @media ${mediaBreakpoint.down.sm} {
        background-position-x: 0% !important;

        &:before, &:after {
          background-position-x: 0% !important;
        }
      }
    `

    return (
      <Layout>
        <SEO
          title={titleTag}
          description={description && description.description}
          image={image}
          doNotIndex={doNotIndex}
        />
        <StyledBackgroundSection fluid={image && image.fluid}>
          <div className={containerClass}>{blocks}</div>
          { FooterBanner && <FooterBanner /> }
        </StyledBackgroundSection>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO
          title={titleTag}
          description={description && description.description}
          image={image}
          doNotIndex={doNotIndex}
        />
        <div className={containerClass}>
          {blocks}

          { FooterBanner && <FooterBanner /> }

          {bottomLinkUrl && (
            <ImageWithColoredLinkBox
              {...{
                title: bottomLinkMainText,
                subtitle: bottomLinkSubtext,
                image: bottomLinkImage,
                imageAltText: bottomLinkImageAltText,
                linkTo: bottomLinkUrl,
              }}
            />
          )}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query Page($id: String!) {
    contentfulPage(id: { eq: $id }) {
      doNotIndex
      ...PageFragment
    }
  }
`
