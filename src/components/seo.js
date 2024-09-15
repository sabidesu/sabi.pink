import * as React from 'react'
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Seo = ({ pageTitle, description, pathname, image, children }) => {
  const { title: siteTitle, description: defaultDescription, image: defaultImage, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: `${pageTitle} | ${siteTitle}`,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname || '/'}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      {children}
    </>
  )
}

export default Seo
