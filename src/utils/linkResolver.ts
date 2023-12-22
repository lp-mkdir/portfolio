export default function linkResolver({type, uid}: {type: string; uid: string}) {
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
