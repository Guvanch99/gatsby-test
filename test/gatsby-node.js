const fetch= require('node-fetch')
const { createRemoteFileNode } = require('gatsby-source-filesystem');
const path = require('path')

exports.sourceNodes = async ({   actions,
                               createNodeId,
                               createContentDigest,
                               getCache }) => {
  const { createNode } = actions;

  const response=await fetch('http://localhost:3000/products')
  const products = await  response.json()
  await Promise.all(
    products.map(async (product) => {
      const imageNode = await createRemoteFileNode({
        url: product.image,
        parentNodeId: null,
        createNode,
        createNodeId,
        createContentDigest,
        cache: getCache(),
      });

      if (imageNode) {
        const productNode = {
          ...product,
          id: createNodeId(`Product-${product.id}`),
          parent: null,
          children: [],
          internal: {
            type: 'Product',
            contentDigest: createContentDigest(product),
          },
          image___NODE: imageNode.id,
        };

        createNode(productNode);
      }
    })
  );
};

exports.createPages = async ({ actions, graphql, page }) => {
  const { createPage } = actions;

  const result = await graphql(`
  query {
  allProduct {
    edges {
      node {
        id
        name
        price
        description
        image {
          childImageSharp {
            gatsbyImageData(
            width: 350
            height: 350
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
          }
        }
      }
    }
  }
}
  `);

  if (result.errors) {
    throw result.errors;
  }

  const products = result.data.allProduct.edges;

  // Create a page for each product
  products.forEach(({ node:{description, price, name, image,id} }) => {
    createPage({
      path: `/product-detail/${id}`,
      component: path.resolve('./src/templates/ProductDetail.tsx'),
      context: {
        id, description, price, name, image
      },
    });
  });

};





