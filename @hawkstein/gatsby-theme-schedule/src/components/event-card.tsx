import React from "react"
import NavLink from "../components/nav-link"
import { DateTime } from "luxon"
import { Box, Text } from "theme-ui"

const formatTime = (time, hour12) =>
  DateTime.fromISO(time).toLocaleString({
    hour: "2-digit",
    minute: "2-digit",
    hour12,
  })

const EventCard = ({ startTime, description, title, path, hour12 = false }) => {
  return (
    <Box my={4}>
      <time dateTime={startTime}>
        <strong>{formatTime(startTime, hour12)}</strong>
      </time>
      <Box my={2}>
        <NavLink to={path} variant="text.event.title">
          {title}
        </NavLink>
      </Box>
      <Text variant="event.description">{description}</Text>
    </Box>
  )
}

export default EventCard
