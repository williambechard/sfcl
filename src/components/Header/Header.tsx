import { Image, Link, Navbar, NavbarBrand } from "@nextui-org/react"
import { ToggleTheme } from "../ToggleTheme/ToggleTheme"
import React from "react"

interface HeaderProps {
  toggleTheme: () => void
  currentTheme: string
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  const navBrandStyle = "text-pri-1 text-4xl"

  return (
    <Navbar className={"bg-bg-1 justify-around"} maxWidth="full">
      <NavbarBrand className={"backdrop-blur-3xl"}>
        <Image
          key={1}
          isBlurred
          src="/assets/badges/badge.png"
          width={45}
          alt="sfcl-logo"
        />
      </NavbarBrand>
      <NavbarBrand className={"justify-center"}>
        <Link color="foreground" href="#" className={navBrandStyle}>
          Home
        </Link>
      </NavbarBrand>
      <NavbarBrand className={"justify-center"}>
        <Link color="foreground" href="#" className={navBrandStyle}>
          About
        </Link>
      </NavbarBrand>
      <NavbarBrand className={"justify-center"}>
        <Link color="foreground" href="#" className={navBrandStyle}>
          Contact
        </Link>
      </NavbarBrand>
      <NavbarBrand className={"flex-row justify-end"}>
        <ToggleTheme themeSetter={toggleTheme} currentTheme={currentTheme} />
      </NavbarBrand>
    </Navbar>
  )
}
