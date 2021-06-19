import * as React from "react"
import { Link } from "gatsby"

const linkResolver = require(`../utils/linkResolver`)

interface IGatsbyLink {
  type: string
  element?: {
    data: {
      // eslint-disable-next-line camelcase
      link_type: string
      id: string
    }
  }
}

const GatsbyLink = (type, element, content): IGatsbyLink => {
  if (element.data.link_type === `Document`) {
    return (
      <Link to={linkResolver(element.data)} key={element.data.id}>
        {content}
      </Link>
    )
  }
  return null
}

export { GatsbyLink }
