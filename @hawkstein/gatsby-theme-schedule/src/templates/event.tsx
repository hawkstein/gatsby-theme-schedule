import React from "react"
import { Heading } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { DateTime } from "luxon"
import Img from "gatsby-image"
import DocumentHead from "../components/doc-head"
import Layout from "../components/layout"
import useScheduleOptions from "../hooks/use-schedule-options"

// How should maxWidth for Sharp and maxHeight for the Img component be passed in?

export const query = graphql`
  query EventQuery($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

type EventTemplateProps = {
  pageContext: {
    title: string
    startTime: number
    location: string
    slug: string
  }
  data: any
}

const formatTime = (time, use24Hour: boolean) =>
  DateTime.fromISO(time).toLocaleString({
    hour: "2-digit",
    minute: "2-digit",
    hour12: !use24Hour,
  })

const EventTemplate: React.FC<EventTemplateProps> = ({
  pageContext: { title, startTime, location },
  data,
}) => {
  const { use24Hour } = useScheduleOptions()
  const fullTitle = `${title} - ${formatTime(
    startTime,
    use24Hour
  )} - ${location}`
  return (
    <Layout>
      <DocumentHead title={fullTitle} />
      <Heading as="h1">{fullTitle}</Heading>
      <Img
        fluid={data.mdx?.frontmatter?.image?.childImageSharp?.fluid}
        style={{ maxHeight: "700px" }}
      />
      <MDXRenderer>{data.mdx?.body}</MDXRenderer>
    </Layout>
  )
}

export default EventTemplate
