import { Card, CardBody, CardHeader } from "@nextui-org/react"
import React, { useEffect } from "react"
import { startOfMonth } from "date-fns"
import { getCalendarData } from "../Calendar/data"
import { EventRow } from "./EventRow/EventRow"
import { UpcomingEvents } from "./UpcomingEvents/UpcomingEvents"
import { EventDetails } from "./EventDetails/EventDetails"

export type Event = {
  name: string
  "active-duty-only": boolean
  "date-time": string
  beginner: boolean
  remote: boolean
  location: string
  details: string
}

export const EventsDisplay = () => {
  const [eventSelected, setEventSelected] = React.useState<Event>()
  const [events, setEvents] = React.useState<Event[]>([])
  const [error, setError] = React.useState<any>(null)

  useEffect(() => {
    const getData = async () => {
      getCalendarData().then((res) => {
        res.error && setError(res.error)
        res.data && setEvents(res.data)
        if (res.data?.length) setEventSelected(res.data[0])
      })
    }
    getData()
  }, [])

  return (
    <div className="w-full flex justify-around gap-x-4 h-70">
      <UpcomingEvents events={events} error={error} />
      {eventSelected && <EventDetails event={eventSelected} />}
    </div>
  )
}
