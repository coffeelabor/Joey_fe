const path = require('path')
const { create } = require('domain')

module.exports.onCreateNode = ({node, actions}) => {
    const {createNodeField} = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }   
}

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const productTemplate = path.resolve('./src/templates/product.js')
    // need to do 3 things:
    // 1. Get path to tamplate
    // 2. Get markdown data
    // 3. Create new pages
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `) 
    
    res.data.allMarkdownRemark.edges.forEach((edge) =>{
        createPage({
            component: productTemplate,
            path:  `/products/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

}