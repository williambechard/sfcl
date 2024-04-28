import { supabase } from "../../db/supabaseClient"

export const getCalendarData = async () => {
  // only get events where the date-time is greater than the current date
  const currentDate = new Date().toISOString()
  const res = await supabase.from("events").select("*").gt("date-time", currentDate)
  return res
}

export const transformedEventData = (eventData: any[]) => {
  return eventData.map((event) => ({
    start: new Date(event["date-time"]), // Convert date-time string to Date object
    title: event.name, // Use event name as the title
    location: event.location, // Use event location
  }))
}
