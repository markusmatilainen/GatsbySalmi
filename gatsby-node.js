const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

//pages / allWordpressPage / allSitePage

/**
const pagesQuery = `
query PagesQuery {
    pages {
      edges {
        node {
          id
          slug
        }
      }
    }
}
`

const postsQuery = `
query PostsQuery {
    posts {
      edges {
          node {
            id
            slug
          }
        }
    }
  }
  `
**/

const pagesQuery = `
query PagesQuery {
    allWordpressPage {
      edges {
        node {
          id
          slug
        }
      }
    }
}
`

const postsQuery = `
query PostsQuery {
  allWordpressPost {
    edges {
        node {
          id
          slug
        }
      }
  }
}
`

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;


    return new Promise((resolve, reject) => {

        // Pages
        graphql(pagesQuery)
            .then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                const pageTemplate = path.resolve("./src/templates/page.js");

                //allWordpressPage tai pages tai allSitePage
                _.each(result.data.allWordpressPage.edges, edge => {
                    createPage({
                        path: `/${edge.node.slug}/`,
                        component: slash(pageTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    });
                });
            })

            .then(() => {
                graphql(postsQuery)
                    .then(result => {
                        if (result.errors) {
                            console.log(result.errors);
                            reject(result.errors);
                        }
                        const postTemplate = path.resolve("./src/templates/post.js");

                        //allWordpressPost tai posts tai allSitePost
                        _.each(result.data.allWordpressPost.edges, edge => {
                            createPage({
                                path: `/post/${edge.node.slug}/`,
                                component: slash(postTemplate),
                                context: {
                                    id: edge.node.id,
                                },
                            });
                        });
                        resolve();
                    });
            });
        // ==== END POSTS ====
    });
};