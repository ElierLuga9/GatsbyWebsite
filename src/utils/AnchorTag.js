import React from "react"
const urlSlug = require("url-slug")

export const AnchorTag = ({ title }) => {
  const anchorSlug = urlSlug(title)
  return (
    <>
      <div id={anchorSlug} />
    </>
  )
}
