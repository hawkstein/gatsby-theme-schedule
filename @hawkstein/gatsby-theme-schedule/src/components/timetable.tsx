import React from "react"
import EventCard from "./event-card"

type TimetableProps = {
  locations: Array<{
    fieldValue: string
    nodes: Array<{
      slug: string
      startTime: string
      endTime: string
      title: string
      description: string
    }>
  }>
}

const Timetable: React.FC<TimetableProps> = ({ locations }) => (
  <>
    {locations.map(location => (
      <div key={location.fieldValue}>
        <h3>{location.fieldValue}</h3>
        {location.nodes.map(event => (
          <EventCard key={event.slug} {...event} />
        ))}
      </div>
    ))}
  </>
)

export default Timetable
