/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

import useSeo from "../hooks/useSeo"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  const seo = useSeo()

  const {
    fallbackSeo: { title, description },
  } = seo

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
