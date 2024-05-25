import React from "react"
import { HeroCard } from "../../components/HeroCard/HeroCard"
import { Carousel } from "../../components/Carousel/Carousel"
import { SponsorsRow } from "../../components/SponsorsRow/SponsorsRow"
import { EventsDisplay } from "../../components/EventsDisplay/EventsDisplay"
import { CardRow } from "../../components/CardRow/CardRow"

export const Home = () => {
  return (
    <div className="bg-bg-2 flex-col">
      <HeroCard
        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.`}
        src="/assets/images/CLSPC.jpg"
        src_alt="clspc-image"
      />
      <SponsorsRow />
      <CardRow gradientDirection={"start"}>
        <EventsDisplay />
      </CardRow>
      <div className="flex flex-row justify-center p-6">
        <h1 className="text-medium italic font-thin text-pri-2">
          Join us as we develop games and apps. A sample of submissions can be viewed
          below.
        </h1>
      </div>
      <Carousel />
    </div>
  )
}
