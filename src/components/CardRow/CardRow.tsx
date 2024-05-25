import { Card, CardBody } from "@nextui-org/react"
import { EventsDisplay } from "../EventsDisplay/EventsDisplay"
import React from "react"

interface CardRowProps {
  children: React.ReactNode
  gradientDirection?: "start" | "end"
}

export const CardRow: React.FC<CardRowProps> = ({
  children,
  gradientDirection = "start",
}) => {
  return (
    <Card
      className={
        "flex-row justify-center py-6 rounded-none bg-gradient-to-r " +
        (gradientDirection === "start" ? "from-bg-1 to-bg-2" : "from-bg-2 to-bg-1")
      }
      isBlurred
    >
      <CardBody className={"rounded-none flex-row justify-evenly"}>
        {children}
      </CardBody>
    </Card>
  )
}
