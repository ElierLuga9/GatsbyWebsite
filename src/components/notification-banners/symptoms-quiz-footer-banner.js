import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FixedBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f3c197;
  position: fixed;
  z-index: 1000;
  left: 18px;
  bottom: 18px;
  opacity: .8;
  margin-right: 85px;
`

const HideSQBannerIcon = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: #f3cc94;
  cursor: pointer;
`

const StyledLink = styled(Link)`
  color: #111;
  font-weight: 500;
  padding: 16px;

  &:hover {
    text-decoration: none;
    color: unset;
  }
`

const SymptomsQuizFooterBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true)

  return (
    isBannerVisible && (
      <FixedBannerContainer>
        <StyledLink to="/symptoms-quiz">
          Not sure which treatment you need? Take our Symptoms Quiz&reg; to find
          the right meds for you. <u>Learn more</u> &#8702;
        </StyledLink>
        <HideSQBannerIcon onClick={() => setIsBannerVisible(false)} role="button">✕</HideSQBannerIcon>
      </FixedBannerContainer>
    )
  )
}

export default SymptomsQuizFooterBanner
