const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const newsPostTemplate = path.resolve('src/templates/news-post.js')
    resolve(
      graphql(`
        {
            allContentfulAktualnosci (limit: 3) {
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
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulAktualnosci.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: newsPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}