interface iLinkResolver {
  type: string
  uid: string
}

const linkResolver = ({ type, uid }: iLinkResolver) => {
  if (type === `project`) {
    return `/project/${uid}`
  }
  if (type === `blog_post`) {
    return `/blog/${uid}`
  }
  if (type === `page`) {
    return `/${uid}`
  }
  return `/`
}

module.exports = linkResolver
