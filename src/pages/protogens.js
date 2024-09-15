import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { protoBg } from '../styles/proto_bg.module.css'

const ProtogensPage = () => {
  return (
    <Layout pageTitle="">
      <div className="p-3 bg-white/80 border-4 border-cyan-700 text-slate-800">
        <h1 className="text-cyan-700 text-5xl font-thin mb-2">protogens!</h1>
        <p className="mb-0">this page should've automatically redirected you to the place where you can download the zip with the shit, but in case it didn't you can download it <a href="https://drive.google.com/file/d/1H6fxnCpdE888NsizKBDOyg6XrsUbc-TC/view?usp=drive_link" className="text-rose-700 no-decoration hover:text-rose-400 transition">here</a></p>
      </div>
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
