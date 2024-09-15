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

  const navLinkStyles = "hover:text-cyan-700 transition"

  return (
    <div className="d-flex flex-column min-vh-100 text-netural-50">
      <div className="fixed w-full z-20 top-0 start-0 text-slate-800">
        <nav className="bg-white/80 border-4 border-cyan-700 flex flex-wrap items-center justify-between mx-2 mt-2 sm:mx-8 sm:mt-8 p-2 sm:p-4">
          <h6 className="text-2xl me-8">{data.site.siteMetadata.title}</h6>
          <div className="flex md:order-2 space-x-3 md:space-x-0">
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full grow md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-2 md:p-0 font-medium space-y-2 sm:space-y-0 md:space-x-4 md:flex-row md:mt-0">
              <li><Link to="/" className={navLinkStyles}>home</Link></li>
              <li><Link to="/about" className={navLinkStyles}>about</Link></li>
              <li><Link to="/blog" className={navLinkStyles}>blog</Link></li>
              <li><Link to="/projects" className={navLinkStyles}>projects</Link></li>
              <li><Link to="/protogens" className={navLinkStyles}>protogens!</Link></li>
              {/* <li><Link to="/itg" className={navLinkStyles}>itg</Link></li> */}
              <li><Link to="/tools/pronunciation" className={navLinkStyles}>pronunciation</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <main className="container w-75 px-0 d-flex flex-grow-1 flex-column justify-content-center" style={{paddingTop: "4.25rem", paddingBottom: "1.5rem"}}>
        {blogPost && <Link to="/blog" className="text-light text-decoration-none">&larr; back to posts</Link>}
        <h1 className="text-cyan-700 text-5xl font-normal pb-2">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
