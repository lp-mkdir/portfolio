import * as React from "react"
import BodyText from "~/slices/body-text"
import { BodyImage } from "~/slices/body-image"
import { BodyCodeBlock } from "~/slices/body-code-block"
import { BodyQuote } from "~/slices/body-quote"

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
