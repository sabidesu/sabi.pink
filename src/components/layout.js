import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children, blogPost }) => {
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
    <div className="d-flex flex-column min-vh-100 text-netural-50">
      <nav className="navbar navbar-expand-sm text-bg-dark fixed-top">
        <div className="container-fluid">
          <h6 className="navbar-brand mb-1">{data.site.siteMetadata.title}</h6>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-0">
              <li className="nav-item"><Link to="/" className="nav-link">home</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link">about</Link></li>
              <li className="nav-item"><Link to="/blog" className="nav-link">blog</Link></li>
              <li className="nav-item"><Link to="/projects" className="nav-link">projects</Link></li>
              <li className="nav-item"><Link to="/protogens" className="nav-link">protogens!</Link></li>
              <li className="nav-item"><Link to="/itg" className="nav-link">itg</Link></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">tools</a>
                <ul className="dropdown-menu">
                  <li><Link to="/tools/pronunciation" className="dropdown-item">pronunciation</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container w-75 px-0 d-flex flex-grow-1 flex-column justify-content-center" style={{paddingTop: "4.25rem", paddingBottom: "1.5rem"}}>
        {blogPost && <Link to="/blog" className="text-light text-decoration-none">&larr; back to posts</Link>}
        <h1 className="text-cyan-700 text-5xl font-thin pb-2">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
