import React from "react"
import {Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const ProductPage = () => {
    const post = useStaticQuery(graphql`
        query {
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date 
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    console.log('Hey! Listen ',post)
    return (
      <Layout>
        <h1>Products</h1>
        <ol>
            {post.allMarkdownRemark.edges.map((edge) => {
                return (
                  <li>
                    <Link to=  {`/products/${edge.node.fields.slug}`}>
                        <h2>{edge.node.frontmatter.title}</h2>
                    </Link>
                    <i>{edge.node.frontmatter.date}</i>
                  </li>
                )
            })}
        </ol>
      </Layout>
    )
}

export default ProductPage
