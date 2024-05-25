import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Competition } from "../pages/Competition/Competition"
export const NavRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={"/competition"} element={<Competition />} />
    </Routes>
  )
}
