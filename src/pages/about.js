import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="about me">
      <p>yo, i'm sabi! i'm a software developer that primarily specializes in web development. i play a lot of VR and rhythm games, especially ITG and SMX.</p>
      <p>this website is meant to be a place for me to throw up pretty much anything and everything i want, as well as a collection of my social links</p>
      <p>pleasure to meet you!</p>
    </Layout>
  )
}

export const Head = () => <Seo pageTitle="about me" />

export default AboutPage
