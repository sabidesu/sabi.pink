import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage } from 'gatsby-plugin-image'

export const query = graphql`
  query {
    allContentfulArt {
      nodes {
        altText {
          altText
        }
        artist {
          link
          name
        }
        description
        image {
          gatsbyImage(width: 750)
        }
      }
    }
  }
`

const ArtPage = ({ data }) => {
  return (
    <Layout pageTitle="art">
      <h3 className="text-3xl mb-4">have some art i've acquired!</h3>
      <div className="columns-sm gap-4">
        {
          data.allContentfulArt.nodes.map((art) =>
            <ArtCard art={art} key={art.altText.altText} />
          )
        }
      </div>
    </Layout>
  )
}

const ArtCard = ({art}) => {
  const link = art.artist.link

  return (
    <div className="text-pretty border-2 border-cyan-700 inline-block mb-4">
      <GatsbyImage image={art.image.gatsbyImage} alt={art.altText.altText} />
      <p className="p-2">
        {art.description}・
        <a className={`${link ? "hover:text-rose-400 font-bold" : null} text-rose-700 transition`} href={link}>{art.artist.name}</a>
      </p>
    </div>
  )
}

export const Head = () => <Seo pageTitle="art" />

export default ArtPage
