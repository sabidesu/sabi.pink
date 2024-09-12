import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { customButtons, btnOutlineDangerEmphasis } from '../styles/button_styles.module.css'
import { protoBg } from '../styles/proto_bg.module.css'

const profileClasses = "rounded-circle img-fluid w-75"

const socialMedia = [
  {
    href: "https://twitter.com/sabidesu1",
    name: "twitter",
  },
  {
    href: "https://tumblr.com/sabidesu",
    name: "tumblr",
  },
  {
    href: "https://bsky.app/profile/sabi.pink",
    name: "bluesky",
  },
  {
    href: "https://github.com/sabidesu",
    name: "github",
  },
]

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center gy-4">
            <div className="col-md-4 d-flex justify-content-end">
              <StaticImage
                  alt="a red fluff dragon with pink hair and yellow horns wearing a blue hoodie looking at the viewer"
                  src="../images/pfp_ref_ratasstouille.png"
                  className={profileClasses}
              />
            </div>
            <div className="relative md:flex-grow md:flex-1 me-0 md:me-12">
              <h4 className="text-cyan-300 text-4xl font-thin">hi, i'm sabi!</h4>
              <p className="mb-1">i'm just a fluff dragon that likes to program things. you can find me at the places below</p>
              <Socials links={socialMedia} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const SocialLink = ({ href, name, last }) => {
  return (
    <>
      <li className="me-2 my-auto"><a href={href} className="no-underline text-rose-400">{name}</a></li>
      {!last && <li className="my-auto me-2">・</li>}
    </>
  )
}

const SocialButton = ({ href, name, last }) => {
  return (
    <a href={href} className={`btn ${btnOutlineDangerEmphasis} rounded-pill w-100 ${!last && "mb-2"}`}>{name}</a>
  )
}

const Socials = ({ links }) => {
  return (
    <>
      <ul id="social links" className="hidden sm:flex flex-row ps-0 mb-0">
        {
          links.map(({ href, name }, index) => {
            if (index === links.length - 1) 
              return <SocialLink href={href} name={name} key={name} last />
            return <SocialLink href={href} name={name} key={name} />
          })
        }
      </ul>
      <div className="sm:hidden mt-3" id={customButtons}>
        {
          links.map(({ href, name }, index) => {
            if (index === links.length - 1)
              return <SocialButton href={href} name={name} key={name} last />
            return <SocialButton href={href} name={name} key={name} />
          })
        }
      </div>
    </>
  )
}

export const Head = () => (
  <Seo pageTitle="home">
    <body className={protoBg} />
  </Seo>
)

export default IndexPage
