import React from 'react'
import {Link} from 'gatsby'

import linkResolver, { ILinkResolver } from '~/utils/linkResolver'

const GatsbyLink = (
  _type: string,
  element: {
    data: ILinkResolver 
  },
  content: string,
  ) => {
  if (element.data.link_type === `Document`) {
    return (
      <Link to={linkResolver(element.data)} key={element.data.id}>
        {content}
      </Link>
    )
  }
  return null
}

export default GatsbyLink
