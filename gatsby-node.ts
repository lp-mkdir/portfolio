import { GatsbyNode } from "gatsby"

type CreatePagesResult = {
  projects: {
    nodes: {
      uid: string
    }[]
  }
  blogPost: {
    nodes: {
      uid: string
    }[]
  }
}

const projectTemplate = require.resolve(`./src/templates/project.tsx`)
const blogPostTemplate = require.resolve(`./src/templates/blog-post.tsx`)

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql<CreatePagesResult>(`
    {
      projects: allPrismicProject {
        nodes {
          uid
        }
      }
      blogPost: allPrismicBlogPost {
        nodes {
          uid
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading the createPages query results`, result.errors)
    return
  }

  result.data.projects.nodes.forEach((project) => {
    createPage({
      path: `project/${project.uid}`,
      component: projectTemplate,
      context: {
        uid: project.uid,
      },
    })
  })
  result.data.blogPost.nodes.forEach((post) => {
    createPage({
      path: `blog/${post.uid}`,
      component: blogPostTemplate,
      context: {
        uid: post.uid,
      },
    })
  })
}
