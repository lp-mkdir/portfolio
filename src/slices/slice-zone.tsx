import * as React from "react"
import { BodyText } from "./body-text"

interface ISliceZoneProps {
  slices: any
}

const SliceZone = ({ slices }: ISliceZoneProps) => {
  const sliceComponents = {
    text: BodyText,
  }

  return slices.map((slice) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      return <SliceComponent slice={slice} />
    }
    return null
  })
}

export { SliceZone }
