import React from "react"
import {Link} from 'gatsby'

const IndexPage = () => {
  return (
    <div>
      <h1>
        Howdy!
      </h1>
      <h2>
        Dont mind me, im just an h2
      </h2>
      <p>
        simple link to the <Link to="/contact"> Contact page</Link>
      </p>
    </div>
  )
}

export default IndexPage