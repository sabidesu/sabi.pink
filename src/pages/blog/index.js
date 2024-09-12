import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="blog">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id} className="mb-2">
            <h2 className="no-underline text-rose-700 text-4xl font-thin mb-1"><Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link></h2>
            <h3 className="text-2xl mb-1">{node.frontmatter.date.toLowerCase()}</h3>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo pageTitle="blog" />

export default BlogPage
