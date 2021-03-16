import React, { Component } from "react"
import styled from "styled-components"

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  z-index: 1000;

`
const HideBannerIcon = styled.div`
  align-items: center;
  background-color: #626BA3;
  color: #fff;
  cursor: pointer;
  display: flex;
  padding: 0 14px;
`

const StyledBanner = styled.div`
  background-color: #717FC0;
  color: #fff;
  flex: 1;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 1.2px;
  padding: 7px 0 3px;
`

class HsaFsaHeaderBanner extends Component {
  hideBanner = () => {
    if (typeof window !== `undefined`) {
      window.localStorage.setItem('hideHsaFsaBanner', true)
      this.forceUpdate()
    }
  };

  render() {
  	const isBannerVisible = (typeof window !== `undefined`) && !window.localStorage.getItem('hideHsaFsaBanner')

	  return (
	    (isBannerVisible || null) && (
	      <BannerContainer>
	        <StyledBanner>PAY WITH YOUR HSA/FSA CARD</StyledBanner>
          <HideBannerIcon onClick={this.hideBanner}>&#10005;</HideBannerIcon>
	      </BannerContainer>
	    )
	  )
  }
}

export default HsaFsaHeaderBanner
