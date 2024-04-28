import { Image, Link, Navbar, NavbarBrand } from "@nextui-org/react"
import { ToggleTheme } from "../ToggleTheme/ToggleTheme"
import React from "react"
import { AdminButton } from "../AdminButton/AdminButton"

interface HeaderProps {
  toggleTheme: () => void
  currentTheme: string
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  const navBrandStyle =
    "text-pri-1 sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold"

  return (
    <Navbar
      className={"bg-bg-1 pr-unit-2xl p-unit-2 flex flex-col sm:flex-row"}
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
      <NavbarBrand className={"mb-2 basis-0"}>
        <Link color="foreground" href="#" className={navBrandStyle}>
          Home
        </Link>
      </NavbarBrand>
      <NavbarBrand className={" mb-2 basis-0"}>
        <Link color="foreground" href="#" className={navBrandStyle}>
          About
        </Link>
      </NavbarBrand>
      <NavbarBrand className={" mb-2 basis-0"}>
        <Link color="foreground" href="#" className={navBrandStyle}>
          Contact
        </Link>
      </NavbarBrand>
      <NavbarBrand className={"mb-2 flex justify-end basis-0"}>
        <ToggleTheme themeSetter={toggleTheme} currentTheme={currentTheme} />
      </NavbarBrand>
    </Navbar>
  )
}
