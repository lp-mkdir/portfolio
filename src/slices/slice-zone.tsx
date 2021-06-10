import * as React from "react"
import { BodyText } from "./body-text"
import { BodyImage } from "./body-image"
import { BodyCodeBlock } from "./body-code-block"

interface ISliceZoneProps {
  slices: any
}

const SliceZone = ({ slices }: ISliceZoneProps) => {
  const sliceComponents = {
    text: BodyText,
    image: BodyImage,
    codeblock: BodyCodeBlock,
  }

  return slices.map((slice) => {
    const SliceComponent = sliceComponents[slice.sliceType]
    if (SliceComponent) {
      return <SliceComponent slice={slice} />
    }
    return null
  })
}

export { SliceZone }
