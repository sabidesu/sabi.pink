import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'

const NavLink = ({link, text}) => {
  const location = useLocation()
  const isCurrentPage = link === '/' ? location.pathname === '/' : location.pathname.includes(link)

  return <li><Link to={link} className={`${isCurrentPage ? 'text-rose-700 border-rose-700 hover:border-cyan-500' : 'border-rose-700/0'} border-s-2  hover:text-cyan-500 transition ps-1`}>{text}</Link></li>
}

const Navbar = ({siteTitle}) => {
  const [showMenu, setShowMenu] = React.useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  const links = [
    {
      link: '/',
      text: 'home',
    },
    {
      link: '/about',
      text: 'about',
    },
    {
      link: '/blog',
      text: 'blog',
    },
    {
      link: '/projects',
      text: 'projects',
    },
    {
      link: '/protogens',
      text: 'protogens!',
    },
    {
      link: '/tools/pronunciation',
      text: 'pronunciation',
    }
  ]

  return (
    <nav className="flex flex-wrap items-center justify-between sticky z-20 top-2 start-0 text-slate-800 bg-white/80 backdrop-blur-sm border-4 border-cyan-700  mx-2 sm:mx-8 sm:mt-8 p-2 sm:p-4">
      <h6 className="text-2xl me-8">{siteTitle}</h6>
      <div className="flex md:order-2 space-x-3 md:space-x-0">
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-rose-700 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-700" aria-controls="navbar-sticky" aria-expanded="false" onClick={toggleMenu}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div className={`items-center justify-between w-full grow md:flex md:w-auto md:order-1 ${showMenu ? 'block' : 'hidden'}`} id="navbar-sticky">
        <ul className="flex flex-col py-2 md:p-0 font-medium space-y-2 sm:space-y-0 md:space-x-4 md:flex-row md:mt-0">
          {links.map(({link, text}) => <NavLink link={link} text={text} />)}
        </ul>
      </div>
    </nav>
  )
}

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
    <>
      <Navbar siteTitle={data.site.siteMetadata.title} /> 
      <main className="mx-auto px-2 sm:px-0 md:w-5/6 mt-4">
        <div className="bg-white/80 backdrop-blur-sm border-4 border-cyan-700 text-slate-800 p-4">
          {blogPost && <Link to="/blog" className="hover:text-cyan-500 transition">&larr; back to posts</Link>}
          {pageTitle && <h1 className="text-cyan-700 text-5xl font-normal pb-2">{pageTitle}</h1>}
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout
