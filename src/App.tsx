import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NextUIProvider,
  Image,
} from "@nextui-org/react"

function App() {
  const navBrandStyle = "text-primary, text-foreground, text-xl"
  return (
    <NextUIProvider>
      <Navbar className={"bg-primary"}>
        <NavbarBrand>
          <Image
            key={1}
            isBlurred
            src="/assets/images/sfa_badge.webp"
            width={45}
            alt="sfcl-logo"
          />
        </NavbarBrand>
        <NavbarBrand>
          <Link color="foreground" href="#" className={navBrandStyle}>
            Home
          </Link>
        </NavbarBrand>
        <NavbarBrand>
          <Link color="foreground" href="#" className={navBrandStyle}>
            About
          </Link>
        </NavbarBrand>
        <NavbarBrand>
          <Link color="foreground" href="#" className={navBrandStyle}>
            Contact
          </Link>
        </NavbarBrand>
      </Navbar>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </NextUIProvider>
  )
}

export default App
