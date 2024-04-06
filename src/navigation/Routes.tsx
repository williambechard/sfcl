import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
export const NavRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
