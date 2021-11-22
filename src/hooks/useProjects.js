import { useStaticQuery, graphql } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDatoCmsProject {
        nodes {
          id
          name
          description
          githublink
          projectlink
          techstack
          imageright
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
            gatsbyImageData(
              width: 1000
              placeholder: BLURRED
              forceBlurhash: false
            )
          }
        }
      }
    }
  `)

  return data.allDatoCmsProject.nodes.map(project => ({
    id: project.id,
    name: project.name,
    description: project.description,
    githublink: project.githublink,
    projectlink: project.projectlink,
    techstack: project.techstack,
    image: project.image,
    imageright: project.imageright,
  }))
}

export default useProjects
