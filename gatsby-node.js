const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // Fetching categories and posts from Contentful
  const result = await graphql(`
    query GetAllPosts {
      posts: allContentfulPost {
        nodes { slug }
      },
      categories: allContentfulCategory {
        nodes { slug }
      }
    }
  `);
  // Creating categories pages by template
  result.data.categories.nodes.forEach(category => {
    createPage({
      path: `/categories/${category.slug}`,
      component: path.resolve(`src/templates/Category/index.js`),
      context: { slug: category.slug }
    })
  });
  // Creating posts pages by template
  result.data.posts.nodes.forEach(post => {
    createPage({
      path: `/posts/${post.slug}`,
      component: path.resolve(`src/templates/Post/index.js`),
      context: { slug: post.slug }
    })
  });
}