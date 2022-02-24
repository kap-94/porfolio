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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
