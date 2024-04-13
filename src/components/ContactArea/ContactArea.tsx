import { Button, Card, CardBody } from "@nextui-org/react"
import React from "react"

export const ContactArea: React.FC = () => {
  return (
    <Card
      className="flex-row justify-center   py-2 rounded-none h-unit-20 bg-gradient-to-r from-bg-2 to-bg-1"
      isBlurred
    >
      <CardBody>
        <div className="flex justify-center ">
          <Button className={"bg-accent-2 border-1.5 border-pri-2 shadow"}>
            <p className="text-pri-2 text-2xl italic">Contact Us</p>
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
