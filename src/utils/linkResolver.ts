export interface ILinkResolver {
  type: string
  uid: string
  id?: string
  link_type?: string
}

export default function linkResolver({type, uid}: ILinkResolver) {
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
