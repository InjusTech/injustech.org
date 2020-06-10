/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
<<<<<<< HEAD
      <div
        style={{
          margin: `0 auto`,
        }}
      >
=======
      {/*<div*/}
      {/*  style={{*/}
      {/*    margin: `0 auto`,*/}
      {/*    maxWidth: 960,*/}
      {/*    padding: `0 1.0875rem 1.45rem`,*/}
      {/*  }}*/}
      {/*>*/}
>>>>>>> b165392867d2c924992f1f9a8cc3705f86320da4
        <main>{children}</main>
      {/*</div>*/}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
