import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <h6 className="navbar-brand">{data.site.siteMetadata.title}</h6>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link to="/" className="nav-link">home</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link">about</Link></li>
              <li className="nav-item"><Link to="/blog" className="nav-link">blog</Link></li>
              <li className="nav-item"><Link to="/protogens" className="nav-link">protogens!</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="w-75 position-absolute top-50 start-50 translate-middle">
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
