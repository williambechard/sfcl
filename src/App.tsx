import React from "react"
import { NextUIProvider } from "@nextui-org/react"
import { NavHeader } from "./components/NavHeader/NavHeader"
import { NavRoutes } from "./navigation/Routes"
import { supabase } from "./db/supabaseClient"

interface AppProps {
  toggleTheme: () => void
  currentTheme: string
}

const App: React.FC<AppProps> = ({ toggleTheme, currentTheme }) => {
  return (
    <NextUIProvider>
      <NavHeader toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <NavRoutes />
    </NextUIProvider>
  )
}

export default App
