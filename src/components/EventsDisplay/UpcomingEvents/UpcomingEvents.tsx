import React from "react"
import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { EventRow } from "../EventRow/EventRow"
interface UpcomingEventsProps {
  events: any
  error: any
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events, error }) => {
  const createEventList = () => {
    console.log("events ", events)
    return events.map((event: any) => {
      console.log("event ", event)
      return (
        <EventRow
          title={event.name}
          isActiveDutyOnly={event["active-duty-only"]}
          date={event["date-time"]}
          isBeginner={event.beginner}
          isRemote={event.remote}
          location={event.location}
        />
      )
    })
  }
  return (
    <Card className="w-1/2 h-unit-60">
      <CardHeader className="justify-center text-pri-1 font-bold text-xl">
        Upcoming Events
      </CardHeader>
      <CardBody className="flex w-full justify-start gap-y-1 h-full">
        {error ? <h3>Error loading events</h3> : createEventList()}
      </CardBody>
    </Card>
  )
}
