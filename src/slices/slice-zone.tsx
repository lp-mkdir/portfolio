import * as React from "react"
import { BodyText } from "./body-text"
import { BodyImage } from "./body-image"
import { BodyCodeBlock } from "./body-code-block"
import { BodyQuote } from "./body-quote"

interface ISliceZoneProps {
  slices: any
}

const SliceZone = ({ slices }: ISliceZoneProps) => {
  const sliceComponents = {
    text: BodyText,
    image: BodyImage,
    codeblock: BodyCodeBlock,
    quote: BodyQuote,
  }

  return slices.map((slice) => {
    const SliceComponent = sliceComponents[slice.sliceType]
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={slice.id} />
    }
    return null
  })
}

export { SliceZone }
