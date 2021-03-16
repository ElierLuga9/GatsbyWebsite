import React from "react"
// import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
export default function LegitScript() {
  // const data = useStaticQuery(graphql`
  //   query sealQuery {
  //     seal: file(relativePath: { eq: "seal.png" }) {
  //       childImageSharp {
  //         fixed(width: 140, height: 100) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <>
      {/*<script src="https://static.legitscript.com/seals/3454890.js"></script>*/}
      <div id="parent">
        <script src="https://static.legitscript.com/seals/3454890.js"></script>
      </div>

      {/*<a
              href="http://legitscript.com/pharmacy/hellowisp.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Verify LegitScript Approval"
            >
              <Img fixed={data.seal.childImageSharp.fixed} />
            </a>*/}
    </>
  )
}
