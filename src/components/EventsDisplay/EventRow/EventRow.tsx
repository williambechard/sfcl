import { Card, CardBody, DatePicker, DateValue, Image } from "@nextui-org/react"
import React from "react"
import { dateConverter } from "./data"
import { Event } from "../EventsDisplay"

interface EventRowProps {
  title: string
  date: DateValue
  location: string
  isRemote: boolean
  isActiveDutyOnly: boolean
  isBeginner: boolean
  setSelectedEvent: any
  event: Event
}

export const EventRow: React.FC<EventRowProps> = ({
  title,
  date,
  location,
  isRemote,
  isActiveDutyOnly,
  isBeginner,
  setSelectedEvent,
  event,
}) => {
  const dateTime = dateConverter(date)
  const h = "26px"
  const w = "26px"

  const mouseEnter = () => {
    console.log("onpress")
    setSelectedEvent(event)
  }

  return (
    <Card
      className="rounded-none h-unit-12 hover:bg-bg-1 hover:cursor-pointer"
      onMouseDown={mouseEnter}
    >
      <CardBody>
        <div className="grid grid-cols-3 w-full gap-4">
          <div className="inline-flex">
            <h1
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </h1>
          </div>
          <div className="flex-row mx-auto">
            <h1>{dateTime}</h1>
          </div>
          <div className="inline-flex gap-x-1 justify-end">
            <Image
              className="mx-1"
              src="/assets/icons/globe.svg"
              alt="globe-icon"
              width={w}
              height={w}
              isBlurred
            />
            <Image
              className="mx-1"
              src="/assets/icons/handshake.svg"
              alt="handshake-icon"
              width={w}
              height={w}
              isBlurred
            />
            <Image
              className="mx-1"
              src="/assets/icons/military.svg"
              alt="military-icon"
              width={w}
              height={w}
              isBlurred
            />
            <Image
              className="mx-1"
              src="/assets/icons/rocket.svg"
              alt="rocket-icon"
              width={w}
              height={w}
              isBlurred
            />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
