import React from "react"
import { graphql } from "gatsby"
import { Heading } from "theme-ui"
import { DateTime } from "luxon"
import DocumentHead from "../components/doc-head"
import Layout from "../components/layout"
import Timetable from "../components/timetable"
import Navigation from "../components/nav"

import useScheduleOptions from "../hooks/use-schedule-options"

export const query = graphql`
  query($date: Date!) {
    allScheduleEvent(
      filter: { date: { eq: $date } }
      sort: { fields: startTime, order: ASC }
    ) {
      group(field: location) {
        nodes {
          title
          startTime
          slug
          path
          description
        }
        fieldValue
      }
    }
  }
`

const DayTemplate = ({ data, pageContext: { date, locationsOrder } }) => {
  // Without a convenient way to do this via the GraphQL query, sort the locations here
  const locations = data.allScheduleEvent.group.sort(
    (a, b) =>
      locationsOrder.indexOf(a.fieldValue) -
      locationsOrder.indexOf(b.fieldValue)
  )
  const { heading } = useScheduleOptions()
  return (
    <Layout>
      <DocumentHead title={heading} />
      <Navigation date={date} />
      <Heading as="h1" variant="text.dayHeading">
        {DateTime.fromISO(date).toLocaleString(DateTime.DATE_HUGE)}
      </Heading>
      <Timetable locations={locations} />
    </Layout>
  )
}

export default DayTemplate
