import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { protoBg } from '../styles/proto_bg.module.css'

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
      <div className="flex p-3 bg-white/80 border-4 border-cyan-700 text-slate-800">
        <div className="md:grid grid-cols-3 gap-x-6 items-center">
          <div className="md:col-span-1 flex justify-end ms-24 mb-2 sm:mb-0">
            <StaticImage
                alt="a red fluff dragon with pink hair and yellow horns wearing a blue hoodie looking at the viewer"
                src="../images/pfp_ref_ratasstouille.png"
                className="max-w-full w-auto h-auto w-3/4 border-2 border-cyan-700"
            />
          </div>
          <div className="md:col-span-2 md:mr-12">
            <h4 className="text-cyan-700 text-4xl font-thin mb-2">hi, i'm sabi!</h4>
            <p className="mb-1">i'm just a fluff dragon that likes to program things. you can find me at the places below</p>
            <Socials links={socialMedia} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

const SocialLink = ({ href, name, last }) => {
  return (
    <>
      <li className="me-2 my-auto"><a href={href} className="no-underline text-rose-700">{name}</a></li>
      {!last && <li className="my-auto me-2">・</li>}
    </>
  )
}

const SocialButton = ({ href, name, last }) => {
  return (
    <a href={href} className={`w-full border-2 border-rose-700 text-center text-rose-700 hover:text-neutral-50 no-underline hover:bg-rose-700 py-1 ${!last && "mb-2"}`}>{name}</a>
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
      <div className="sm:hidden mt-3 flex flex-col">
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
