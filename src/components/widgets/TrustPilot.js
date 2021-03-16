import React from "react"
import Helmet from "react-helmet"

export default function TrustPilot() {
  return (
    <>
      <Helmet>
        {/* <!-- TrustBox script --> */}
        {/* <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script> */}
        {/* <!-- End TrustBox script --> */}
      </Helmet>

      {/* <!-- TrustBox widget - Micro Review Count -->  */}
      <div
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="5419b6a8b0d04a076446a9ad"
        data-businessunit-id="5c19735eda8434000155db52"
        data-style-height="24px"
        data-style-width="100%"
        data-theme="light"
      >
        <a
          href="https://www.trustpilot.com/review/hellowisp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          Trustpilot
        </a>
      </div>
      {/* <!-- End TrustBox widget --> */}
    </>
  )
}
