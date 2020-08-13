import React from "react"
import {Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import productStyles from './products.module.scss'

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
        <ol className={productStyles.posts}>
            {post.allMarkdownRemark.edges.map((edge) => {
                return (
                  <li className={productStyles.post}>
                    <Link to=  {`/products/${edge.node.fields.slug}`}>
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.frontmatter.date}</p>
                    </Link>
                  </li>
                )
            })}
        </ol>
      </Layout>
    )
}

export default ProductPage
