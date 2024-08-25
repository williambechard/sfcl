import React from "react"
import { Card, CardBody, CardHeader, DateValue } from "@nextui-org/react"
import { Event } from "../EventsDisplay"
import { dateConverter } from "../EventRow/data"

interface EventDetailsProps {
  event: Event
}
export const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  const { name, remote, location, beginner, details } = event
  const adOnly = event["active-duty-only"]
  const dateTime: string = dateConverter(event["date-time"] as unknown as DateValue)

  return (
    <Card className="p-2 bg-bg-2">
      <CardHeader className="justify-center text-pri-2 font-extrabold underline">
        Details
      </CardHeader>
      <CardBody className="flex-col justify-center">
        <div className="flex-col h-full">
          <div className={"flex justify-between"}>
            <div className={"inline-flex text-sm"}>
              <span className={"text-pri-1 mr-1"}>Event:</span> {name}
            </div>
            <div className={"inline-flex text-sm"}>{dateTime}</div>
          </div>
          <div className={"inline-flex text-sm"}>
            <span className={"text-pri-1 mr-1"}>Location:</span> {location}
          </div>
          <div className={"p-2 text-xs italic"}>{details}</div>
        </div>
      </CardBody>
    </Card>
  )
}
