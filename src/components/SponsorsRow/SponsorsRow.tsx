import React from "react"
import { Button, Card, CardBody, Image } from "@nextui-org/react"

export const SponsorsRow = () => {
  return (
    <Card className="rounded-none bg-gradient-to-r from-bg-2 to-bg-1" isBlurred>
      <CardBody className="flex-row justify-around">
        <Image
          src="/assets/logos/AF.webp"
          alt="sponsors"
          width={100}
          height={100}
          isBlurred
        />
        <Image
          src="/assets/logos/spaceForceLogo.webp"
          alt="sponsors"
          width={100}
          height={100}
          isBlurred
        />
        <div className={"mt-auto mb-auto"}>
          <Image
            src="/assets/logos/SFA_Full_Color.webp"
            alt="sponsors"
            width={120}
            height={150}
            className="rounded-none"
            isBlurred
          />
        </div>
      </CardBody>
    </Card>
  )
}
