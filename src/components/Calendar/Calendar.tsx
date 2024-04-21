import React, { useEffect } from "react"
import InfiniteCalendar from "react-infinite-calendar"
import "react-infinite-calendar/styles.css"
import { Card, CardBody } from "@nextui-org/react"
import { getCalendarData, transformedEventData } from "./data" // only needs to be imported once
import { format, subHours, startOfMonth } from "date-fns"
import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from "@zach.codes/react-calendar"

// Define EventType
type EventType = {
  title: string
  date: Date
  // Add any other properties if needed
}

export const Calendar: React.FC = () => {
  const [events, setEvents] = React.useState<any>([])
  const [error, setError] = React.useState<any>(null)
  const [currentMonth, setCurrentMonth] = React.useState<Date>(
    startOfMonth(new Date()),
  )

  const today = new Date()
  const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7,
  )

  useEffect(() => {
    const getData = async () => {
      getCalendarData().then((res) => {
        res.error && setError(res.error)
        res.data && setEvents(res.data)
      })
    }

    getData()
  }, [])

  console.log("resData ", events)
  console.log("resError ", error)

  return (
    <div className={"w-fit h-unit-40"}>
      <MonthlyCalendar
        currentMonth={currentMonth}
        onCurrentMonthChange={(date) => setCurrentMonth(date)}
      >
        <MonthlyNav />
        <MonthlyBody
          events={[
            { title: "Call John", date: subHours(new Date(), 2) },
            { title: "Call John", date: subHours(new Date(), 1) },
            { title: "Meeting with Bob", date: new Date() },
          ]}
        >
          <MonthlyDay<EventType>
            renderDay={(data) =>
              data.map((item, index) => (
                <DefaultMonthlyEventItem
                  key={index}
                  title={item?.title}
                  // Format the date here to be in the format you prefer
                  date={format(item?.date, "k:mm")}
                />
              ))
            }
          />
        </MonthlyBody>
      </MonthlyCalendar>
    </div>
  )
}
