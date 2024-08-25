import { Image, Navbar, NavbarBrand } from "@nextui-org/react"
import { ToggleTheme } from "../ToggleTheme/ToggleTheme"
import React from "react"
import { Link, useLocation } from "react-router-dom"

interface NavHeaderProps {
  toggleTheme: () => void
  currentTheme: string
}

export const NavHeader: React.FC<NavHeaderProps> = ({
  toggleTheme,
  currentTheme,
}) => {
  const location = useLocation() // Get the current route
  const navBrandStyle =
    "sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold"

  // Determine if the current route matches the link's path
  const getLinkClass = (path: string) =>
    `flex items-center ${location.pathname === path ? "text-accent-2 " : "text-accent-1"}`

  return (
    <Navbar
      className={
        "bg-bg-1 pr-unit-2xl p-unit-2 py-3 flex flex-col md:flex-row md:py-0 lg:py-2"
      }
      maxWidth={"full"}
      isBordered
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
          <Link to="/" className={getLinkClass("/")}>
            <span className={navBrandStyle}>Home</span>
          </Link>
        </NavbarBrand>
        <NavbarBrand className={"gap-0"}>
          <Link to="competition" className={getLinkClass("/competition")}>
            <span className={navBrandStyle}>Competition</span>
          </Link>
        </NavbarBrand>
        <NavbarBrand className={"justify-start gap-0 sm:justify-end"}>
          <Link to="about" className={getLinkClass("/about")}>
            <span className={navBrandStyle}>About</span>
          </Link>
        </NavbarBrand>
      </div>
      <NavbarBrand className={"mb-2 flex justify-end"}>
        <ToggleTheme themeSetter={toggleTheme} currentTheme={currentTheme} />
      </NavbarBrand>
    </Navbar>
  )
}
