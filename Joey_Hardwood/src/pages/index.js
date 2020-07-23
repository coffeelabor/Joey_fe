import React from "react"
import {Link} from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'


const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>
        Howdy!
      </h1>
      <h2>
        Dont mind me, im just an h2
      </h2>
      <p>
        simple link to the <Link to="/contact"> Contact page</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage