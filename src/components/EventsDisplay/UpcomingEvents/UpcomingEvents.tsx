import React from "react"
import {
  Card,
  CardBody,
  CardHeader,
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react"
import { EventRow } from "../EventRow/EventRow"
import { Pagination } from "swiper/modules"
import { Event } from "../EventsDisplay"

interface UpcomingEventsProps {
  events: Event[]
  error: any
  setSelectedEvent: any
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({
  events,
  error,
  setSelectedEvent,
}) => {
  const [page, setPage] = React.useState(1)
  const rowsPerPage = 4

  const pages = Math.ceil(events.length / rowsPerPage)

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return events.slice(start, end)
  }, [page, events])

  const createEventList = () => {
    return events.map((event: any) => {
      return (
        <EventRow
          key={event.id}
          event={event}
          title={event.name}
          isActiveDutyOnly={event["active-duty-only"]}
          date={event["date-time"]}
          isBeginner={event.beginner}
          isRemote={event.remote}
          location={event.location}
          setSelectedEvent={setSelectedEvent}
        />
      )
    })
  }

  return (
    <Card className="p-2">
      <CardHeader className="justify-center text-pri-1 font-bold text-xl">
        Upcoming Events
      </CardHeader>
      <CardBody>
        {error ? <h3>Error loading events</h3> : createEventList()}
      </CardBody>
    </Card>
  )
}
