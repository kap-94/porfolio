import { useStaticQuery, graphql } from "gatsby"

const useSeo = function () {
  const data = useStaticQuery(graphql`
    {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `)

  return data.datoCmsSite.globalSeo
}

export default useSeo
