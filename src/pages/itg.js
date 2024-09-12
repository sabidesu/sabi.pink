import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const ITGPage = () => {
  return (
    <Layout pageTitle="in the groove">
      <StaticImage src="../images/itg_meme.png" className="h-full mx-auto" />
    </Layout>
  )
}

export const Head = () => <Seo pageTitle="itg" />

export default ITGPage

