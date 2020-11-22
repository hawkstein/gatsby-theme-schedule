import React from "react"
import EventCard from "./event-card"

type TimetableProps = {
  locations: Array<{
    fieldValue: string
    nodes: Array<{
      startTime: string
      endTime: string
      title: string
      path: string
      description: string
    }>
  }>
}

const Timetable: React.FC<TimetableProps> = ({ locations }) => (
  <>
    {locations.map((location) => (
      <div key={location.fieldValue}>
        <h3>{location.fieldValue}</h3>
        {location.nodes.map((event) => (
          <EventCard key={event.path} {...event} />
        ))}
      </div>
    ))}
  </>
)

export default Timetable
