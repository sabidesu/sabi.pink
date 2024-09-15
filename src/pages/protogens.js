import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { protoBg } from '../styles/proto_bg.module.css'

const ProtogensPage = () => {
  return (
    <Layout pageTitle="protogens!">
      <p className="mb-0 mt-4">this page should've automatically redirected you to the download, but in case it didn't you can download it <a href="https://drive.google.com/file/d/1H6fxnCpdE888NsizKBDOyg6XrsUbc-TC/view?usp=drive_link" className="text-rose-700 no-underline hover:text-rose-400 transition">here</a></p>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    pageTitle="protogens!"
    description="download sabi's protogen design here!"
    image="/protogen_wallpaper.png"
  >
    <body className={protoBg} />
    <meta http-equiv="Refresh" content="0; URL=https://drive.google.com/file/d/1H6fxnCpdE888NsizKBDOyg6XrsUbc-TC/view?usp=drive_link" />
  </Seo>
)

export default ProtogensPage
