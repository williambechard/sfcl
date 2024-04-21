import { DateValue } from "@nextui-org/react"

export const dateConverter = (date: DateValue) => {
  let convertedDate = date.toString().split("T")[0].split("-").reverse().join("/")
  convertedDate =
    convertedDate.split("/")[1] +
    "/" +
    convertedDate.split("/")[0] +
    "/" +
    convertedDate.split("/")[2]

  return new Date(convertedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
}
