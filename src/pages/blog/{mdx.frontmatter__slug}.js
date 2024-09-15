import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { MDXProvider } from '@mdx-js/react'

const MyParagraph = props => <p className="mb-4" {...props} />
const MyLink = props => <a className="text-rose-700 hover:text-rose-400 transition underline" {...props} />
const MyCode = props => <code className="bg-slate-800 text-rose-400 rounded px-1" {...props} />
const MyCodeBlock = props => <pre className="bg-slate-800 text-neutral-200 rounded mb-4 p-2" {...props} />
const MyBlockquote = props => <blockquote className="border-cyan-700 border-l-2 mb-4 px-2" {...props} />
const MyUnorderedList = props => <ul className="list-disc mb-4" {...props} />
const MyOrderedList = props => <ol className="list-decimal mb-4" {...props} />
const MyListItem = props => <li className="ms-8" {...props} />
const MyDelete = props => <delete className="line-through" {...props} />
const MyHr = props => <hr className="border border-slate-800 rounded-lg mb-4" {...props} />
const MyHeading1 = props => <h1 className="text-4xl text-cyan-700" {...props} />
const MyHeading2 = props => <h2 className="text-3xl text-cyan-700" {...props} />
const MyHeading3 = props => <h3 className="text-2xl text-cyan-700" {...props} />
const MyHeading4 = props => <h4 className="text-xl text-cyan-700" {...props} />
const MyHeading5 = props => <h5 className="text-lg text-cyan-700" {...props} />
const MyHeading6 = props => <h6 className="text-md tracking-wider text-cyan-700" {...props} />

const components = {
  p: MyParagraph,
  a: MyLink,
  code: MyCode,
  pre: MyCodeBlock,
  blockquote: MyBlockquote,
  ul: MyUnorderedList,
  ol: MyOrderedList,
  li: MyListItem,
  delete: MyDelete,
  hr: MyHr,
  h1: MyHeading1,
  h2: MyHeading2,
  h3: MyHeading3,
  h4: MyHeading4,
  h5: MyHeading5,
  h6: MyHeading6,
}

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title} blogPost>
      <h3 className="text-2xl text-rose-700 mb-1">{data.mdx.frontmatter.date.toLowerCase()}</h3>
      <MDXProvider components={components}>{children}</MDXProvider>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo pageTitle={`${data.mdx.frontmatter.title} | blog`} />

export default BlogPost
