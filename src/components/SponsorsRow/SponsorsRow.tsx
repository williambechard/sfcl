import React from "react"

import { Button, Card, CardBody, Image } from "@nextui-org/react"
import { CardRow } from "../CardRow/CardRow"

const USAFLink = "https://www.af.mil/"
const USSFLink = "https://www.spaceforce.mil/"
const SFALink = "https://ussfa.org/wp/"
const mikeSullivanLink = "mailto:michael.sullivan@ussfa.org"

export const SponsorsRow = () => {
  const openLink = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer")
  }
  const openEmail = (email: string) => {
    window.open(email, "_blank")
  }

  return (
    <CardRow gradientDirection={"end"}>
      <Button onPress={() => openLink(SFALink)} className="h-full bg-transparent">
        <div className={"mt-auto mb-auto"}>
          <Image
            src="/assets/logos/SFA_Full_Color.webp"
            alt="sponsors"
            width={120}
            height={150}
            className="rounded-none"
          />
        </div>
      </Button>
      <Button onPress={() => openLink(USSFLink)} className="h-full bg-transparent">
        <Image
          src="/assets/logos/spaceForceLogo.webp"
          alt="sponsors"
          width={100}
          height={100}
        />
      </Button>
      <Button onPress={() => openLink(USAFLink)} className="h-full bg-transparent">
        <Image src="/assets/logos/AF.webp" alt="sponsors" width={100} height={100} />
      </Button>
      <Button
        className="h-full bg-transparent"
        onClick={() => openEmail(mikeSullivanLink)}
      >
        <Image
          src="/assets/logos/MikeSullivan.webp"
          alt="sponsors"
          width={98}
          height={98}
        />
      </Button>
    </CardRow>
  )
}
