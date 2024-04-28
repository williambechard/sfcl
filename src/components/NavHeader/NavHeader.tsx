import { Image, Link, Navbar, NavbarBrand } from "@nextui-org/react"
import { ToggleTheme } from "../ToggleTheme/ToggleTheme"
import React from "react"
import { AdminButton } from "../AdminButton/AdminButton"

interface NavHeaderProps {
  toggleTheme: () => void
  currentTheme: string
}

export const NavHeader: React.FC<NavHeaderProps> = ({
  toggleTheme,
  currentTheme,
}) => {
  const navBrandStyle =
    "text-pri-1 sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold"

  return (
    <Navbar
      className={
        "bg-bg-1 pr-unit-2xl p-unit-2 py-3 flex flex-col md:flex-row md:py-0 lg:py-2"
      }
      maxWidth={"full"}
    >
      <NavbarBrand className={"backdrop-blur-3xl basis-0"}>
        <Image
          key={1}
          isBlurred
          src="/assets/badges/badge.png"
          width={45}
          alt="sfcl-logo"
        />
      </NavbarBrand>
      <div
        className={"md-0 flex flex-col justify-evenly flex-grow sm:flex-row sm:md-2"}
      >
        <NavbarBrand className={"gap-0"}>
          <Link color="foreground" href="/" className={navBrandStyle}>
            Home
          </Link>
        </NavbarBrand>
        <NavbarBrand className={"gap-0"}>
          <Link color="foreground" href="competition" className={navBrandStyle}>
            Competition
          </Link>
        </NavbarBrand>
        <NavbarBrand className={"justify-start gap-0 sm:justify-end"}>
          <Link color="foreground" href="about" className={navBrandStyle}>
            About
          </Link>
        </NavbarBrand>
      </div>
      <NavbarBrand className={"mb-2 flex justify-end"}>
        <ToggleTheme themeSetter={toggleTheme} currentTheme={currentTheme} />
      </NavbarBrand>
    </Navbar>
  )
}
