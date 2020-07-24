import React from "react"
import {Link} from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>
        Howdy!
      </h1>
      <h2>
        Dont mind me, im just an h2
      </h2>
      <p>
        simple link to the <Link to="/contact"> Contact page</Link>
      </p>
    </Layout> 
  )
}

export default IndexPage