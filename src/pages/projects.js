import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage } from 'gatsby-plugin-image'

export const query = graphql`
  query {
    allContentfulProject {
      nodes {
        description {
          description
        }
        name
        previewImage {
          description
          gatsbyImage(width: 1000)
        }
        viewLink
        sourceLink
        sourceLinkText
      }
    }
  }
`

const ProjectsPage = ({ data }) => {
  return (
    <Layout pageTitle="projects">
      <h3 className="text-3xl mb-4">here are some projects i've worked on! (or are <em>working</em> on! ;)</h3>
      <div className="columns-1 sm:columns-2 gap-4">
        {
          data.allContentfulProject.nodes.map((project) =>
            <ProjectCard project={project} key={project.name} />
          )
        }
      </div>
    </Layout>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <div className="mb-4 border-2 border-cyan-700">
      <div className="sm:grid grid-cols-4 gap-0">
        <div className="sm:col-span-1">
          <GatsbyImage image={project.previewImage.gatsbyImage} alt={project.previewImage.description} className="max-w-full h-full" />
        </div>
        <div className="sm:col-span-3">
          <div className="h-full flex flex-col justify-between p-4">
            <div className="mb-4">
              <h5 className="text-xl">{project.name}</h5>
              <p>{project.description.description}</p>
            </div>
            <div className="flex justify-end">
              { project.viewLink && <a href={project.viewLink} className={"border border-slate-100 text-neutral-50 hover:bg-slate-100 hover:text-slate-800 p-2"} target="_blank" rel="noopener noreferrer">view</a> }
              { project.sourceLink && <a href={project.sourceLink} className={"border border-rose-700 text-rose-700 hover:bg-rose-700 hover:text-neutral-50 ms-2 p-2"} target="_blank" rel="noopener noreferrer">{project.sourceLinkText}</a> }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo pageTitle="projects" />

export default ProjectsPage
