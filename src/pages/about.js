import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>About Gatsby</h1>
    <p>Such wow. Very React.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
