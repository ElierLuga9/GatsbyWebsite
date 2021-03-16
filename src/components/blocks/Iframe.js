import React, { useRef } from "react"
import styled from "styled-components"
import { AnchorTag } from "../../utils/AnchorTag"
import IframeResizer from 'iframe-resizer-react'

const StyledIframe = styled.div`

`


export const Iframe = ({ title, containerClass, iframeSrc }) => {
  const iframeRef = useRef(null)

  return (
    <StyledIframe className={`${containerClass}`}>
      <AnchorTag title={title} />
      <IframeResizer
        forwardRef={iframeRef}
        heightCalculationMethod="lowestElement"
        inPageLinks
        log
        src={iframeSrc}
        style={{ width: '1px', minWidth: '100%', marginBottom: '2rem'}}
        scrolling="no"
        name="ss"
        frameBorder="0"
      />

    </StyledIframe>
  )
}
