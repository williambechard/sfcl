import {
  Card,
  CardHeader,
  Image,
  CardBody,
  Textarea,
  CardFooter,
  Button,
} from "@nextui-org/react"
import React from "react"
import { Line } from "../../components/Line/Line"

export const Home = () => {
  const cardStyles = "bg-secondary"
  const cardContainerStyles = "inline-flex"
  return (
    <div className="bg-bg-2 flex-col pb-10">
      <Card isBlurred className="rounded-none bg-bg-2">
        <CardBody>
          <div className="flex justify-end pr-unit-2xl py-10">
            <div className="w-full">
              <p className="p-unit-1 text-pri-2 overflow-ellipsis px-unit-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <Image
              isBlurred
              src="/assets/images/CLSPC.jpg"
              className="object-cover rounded-xl w-fit h-40 border-2 border-pri-1"
              alt="sfcl-image-1"
            />
          </div>
        </CardBody>
      </Card>
      <Card
        className="flex-row justify-center pl-unit-2xl py-2 rounded-none h-unit-20 bg-gradient-to-r from-bg-2 to-bg-1 "
        isBlurred
      >
        <CardBody>
          <div className="flex justify-center">
            <Button className={"bg-accent-2 border-1.5 border-pri-2 shadow"}>
              <p className="text-pri-2 text-2xl italic">Contact Us</p>
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
