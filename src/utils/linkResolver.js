function linkResolver({type, uid}) {
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
