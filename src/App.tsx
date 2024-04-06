import React from "react"
import { NextUIProvider } from "@nextui-org/react"
import { Header } from "./components/Header/Header"
import { NavRoutes } from "./navigation/Routes"

interface AppProps {
  toggleTheme: () => void
  currentTheme: string
}

const App: React.FC<AppProps> = ({ toggleTheme, currentTheme }) => {
  return (
    <NextUIProvider>
      <Header toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <NavRoutes />
    </NextUIProvider>
  )
}

export default App
