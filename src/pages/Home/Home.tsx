import { Card, CardHeader, Image, CardBody } from "@nextui-org/react"
import React from "react"

export const Home = () => {
  const cardStyles = "bg-primary"
  const cardContainerStyles = "inline-flex"
  return (
    <div className="dark text-foreground bg-background" style={{ height: "89.8vh" }}>
      <div style={{ height: "89.8vh" }}>
        <div
          style={{ height: 60 }}
          className={" flex-row flex-wrap justify-between align-middle"}
        />
        <div className={cardContainerStyles} style={{ height: 200, width: 160 }}>
          <Card className={cardStyles} style={{ width: 140, height: 180 }}>
            <h1> Hello </h1>
          </Card>
        </div>
        <div className={cardContainerStyles} style={{ height: 200, width: 160 }}>
          <Card className={cardStyles} style={{ width: 140, height: 180 }}>
            <h1> Hello </h1>
          </Card>
        </div>
        <div className={cardContainerStyles} style={{ height: 200, width: 160 }}>
          <Card className={cardStyles} style={{ width: 140, height: 180 }}>
            <h1> Hello </h1>
          </Card>
        </div>
      </div>
    </div>
  )
}
