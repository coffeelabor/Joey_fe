import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
                    }
                }
            }
        }
    `)
    console.log(post)
    return (
      <Layout>
        <h1>Products</h1>
        <ol>
            {post.allMarkdownRemark.edges.map((edge) => {
                return (
                  <li>
                    <h2>{edge.node.frontmatter.title}</h2>
                    <i>{edge.node.frontmatter.date}</i>
                  </li>
                )
            })}
        </ol>
      </Layout>
    )
}

export default ProductPage
