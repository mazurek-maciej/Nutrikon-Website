const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const newsPostTemplate = path.resolve('src/templates/news-post.js')
    const teamTeamplate = path.resolve('src/templates/team-post.js')
    resolve(
      graphql(`
        {
          aktualnosci: allContentfulAktualnosci {
            edges {
              node {
                id
                slug
                title
                body {
                  body
                }
              }
            }
          }
          zespol: allContentfulZespol {
            edges {
              node {
                id
                slug
                title
                heading
                order
                about {
                  about
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.aktualnosci.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: newsPostTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        result.data.zespol.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: teamTeamplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
      })
    )
  })
}
