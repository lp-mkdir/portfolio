import React from 'react';
import { Link } from 'gatsby';

import linkResolver, { ILinkResolver } from '~/utils/linkResolver';

const GatsbyLink = (
  _type: string,
  { data }: { data: ILinkResolver },
  content: string,
) => {
  if (data.link_type === `Document`) {
    return (
      <Link to={linkResolver(data)} key={data.id}>
        {content}
      </Link>
    );
  }
  return null;
};

export default GatsbyLink;
