import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"
import { Image } from "@nextui-org/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

export const Carousel = () => {
  const createSlides = () => {
    const slides: React.ReactNode[] = []
    //@ts-expect-error issue with context type
    const images = require.context("../../../public/assets/images/games/2024", true)
    images.keys().forEach((image: any) => {
      const imageName = image.split("/")[1]

      slides.push(
        <SwiperSlide key={imageName} className={"m-auto"}>
          <div className={"flex-row justify-center rounded-2xl w-full"}>
            <Image
              src={images(image)}
              alt={imageName + "_image"}
              isBlurred
              width={600}
              height={100}
            />
          </div>
        </SwiperSlide>,
      )
    })
    return slides
  }

  return (
    <div className={"pb-6 flex-row justify-between align-middle"}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {createSlides()}
      </Swiper>
    </div>
  )
}
