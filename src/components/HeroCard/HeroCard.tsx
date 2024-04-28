import { Card, CardBody, Image } from "@nextui-org/react"
import React, { ReactEventHandler } from "react"

interface HeroCardProps {
  text: string
  src: string
  src_alt: string
}

export const HeroCard: React.FC<HeroCardProps> = ({ text, src, src_alt }) => {
  return (
    <Card isBlurred className="rounded-none bg-bg-2 p-6">
      <CardBody>
        <div className="pr-unit-2xl p-unit-2 flex flex-col md:flex-row">
          <div className="flex-row flex-1 overflow-y-auto m-unit-2 p-6">
            <p className="md:p-unit-4 text-pri-2 overflow-ellipsis text-xs lg:text-lg md:text-sm sm:text-xs">
              {text}
            </p>
          </div>
          <div className="flex flex-row justify-center my-unit-2 p-6">
            <Image
              isBlurred
              src={src}
              className="rounded-xl h-40 border-2 border-pri-1"
              alt={src_alt}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
