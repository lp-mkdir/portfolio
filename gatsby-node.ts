import { GatsbyNode } from "gatsby"

type CreatePagesResult = {
  projects: {
    nodes: {
      uid: string
    }[]
  }
}

const projectTemplate = require.resolve(`./src/templates/project.tsx`)

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql<CreatePagesResult>(`
    {
      projects: allPrismicProject {
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
}
