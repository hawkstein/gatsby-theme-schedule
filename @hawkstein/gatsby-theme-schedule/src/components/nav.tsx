import React from "react"
import { Flex } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import NavLink from "./nav-link"
import useScheduleOptions from "../hooks/use-schedule-options"

type NavProps = {
  date?: string
}

const Navigation: React.FC<NavProps> = ({ date }) => {
  const data = useStaticQuery(graphql`
    {
      allScheduleDay(sort: { fields: date }) {
        nodes {
          date
          label
        }
      }
    }
  `)
  const days = data.allScheduleDay.nodes
  const { useCollectionInURLs, collection, basePath } = useScheduleOptions()
  const path = `${basePath}${useCollectionInURLs ? `${collection}/` : "/"}`
  return (
    <Flex as="nav">
      {days.map((day) => (
        <NavLink
          key={day.date}
          sx={{
            variant: date === day.date ? "links.activeDay" : "links.day",
          }}
          to={`${path}${day.label.toLowerCase()}`}
        >
          {day.label}
        </NavLink>
      ))}
    </Flex>
  )
}

export default Navigation
