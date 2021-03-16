import React from "react"
import Banner from "./Banner"
import MedicalTeam from "./MedicalTeam"
import HowItWorks from "./HowItWorks"
import ProductList from "../products/ListGroup"
import PageTitle from "./PageTitle"
import { Content } from "./Content"
import { BlogList } from "../blog/BlogList"
import { MultiColumnContent } from "./MultiColumnContent"
import { TextBanner } from "./TextBanner"
import { Spacer } from "./Spacer"
import { AccordionGroup } from "./AccordionGroup"
import { ImageBlock } from "./ImageBlock"
import { GatherContactInfo } from "./GatherContactInfo"
import { ButtonGroupSection } from "./ButtonGroupSection"
import { Iframe } from "./Iframe"
import { Product } from "./Product"
import { Button } from "./Button"

export default function blockFactory(blocks) {
  if (!blocks) return null

  const reactBlocks = blocks.map((block, idx) => {
    switch (block.__typename) {
      case "ContentfulBanner":
        return <Banner key={`${block.id}-${idx}`} {...block} />
      case "ContentfulMedicalTeam":
        return <MedicalTeam key={`${block.id}-${idx}`} {...block} />
      case "ContentfulHowItWorks":
        return <HowItWorks key={`${block.id}-${idx}`} {...block} />
      case "ContentfulProductGroup":
        return <ProductList key={`${block.id}-${idx}`} {...block} />
      case "ContentfulPageTitle":
        return <PageTitle key={`${block.id}-${idx}`} {...block} />
      case "ContentfulGenericContent":
        return <Content key={`${block.id}-${idx}`} {...block} />
      case "ContentfulBlogGroup":
        return <BlogList key={`${block.id}-${idx}`} {...block} />
      case "ContentfulMultiColumnContentGroup":
        return <MultiColumnContent key={`${block.id}-${idx}`} {...block} />
      case "ContentfulTextBanner":
        return <TextBanner key={`${block.id}-${idx}`} {...block} />
      case "ContentfulSpacer":
        return <Spacer key={`${block.id}-${idx}`} {...block} />
      case "ContentfulAccordionGroup":
        return <AccordionGroup key={`${block.id}-${idx}`} {...block} />
      case "ContentfulSeoImage":
        return <ImageBlock key={`${block.id}-${idx}`} {...block} />
      case "ContentfulButtonGroupSection":
        return <ButtonGroupSection key={`${block.id}-${idx}`} {...block} />
      case "ContentfulGatherContactInfo":
        return <GatherContactInfo key={`${block.id}-${idx}`} {...block} />
      case "ContentfulIframe":
        return <Iframe key={`${block.id}-${idx}`} {...block} />
      case "ContentfulProduct":
        return <Product key={`${block.id}-${idx}`} {...block} />
      case "ContentfulButton":
        return <Button key={`${block.id}-${idx}`} {...block} />

      default:
        console.log("No Block found")
        return null
    }
  })
  return reactBlocks
}
