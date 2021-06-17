const linkResolver = (doc) => {
  if (doc.type === `project`) {
    return `/project/${doc.uid}`
  }
  if (doc.type === `blog_post`) {
    return `/blog/${doc.uid}`
  }
  return `/`
}

module.exports = linkResolver
