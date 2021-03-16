import React from 'react';
import styled from "styled-components"
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa"

const StyledContainer = styled.div`
  text-align: center;

  * {
    color: #cf5e6f;
    margin: 0 8px;
    font-size:24px;
  }
`

export default function SocialShare({ page }) {
  return (
    <StyledContainer>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${page}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

      <a
        href={`http://pinterest.com/pin/create/button/?url=${page}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pinterest"
      >
        <FaPinterest />
      </a>
    </StyledContainer>
  );
}

