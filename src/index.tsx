import React, { StrictMode, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import events from "node:events"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const RootComponent = () => {
  // Define state to manage the theme
  const [theme, setTheme] = useState(() =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  )
  const changeTheme = (target: string) => {
    console.log("changing theme to ", target)
    setTheme(target)
    // Update the data-theme attribute on the root HTML element
    document.documentElement.setAttribute("data-theme", target)
  }

  // Watch for changes in system theme preference
  useEffect(() => {
    const useDark = window.matchMedia("(prefers-color-scheme: dark)")
    changeTheme(useDark.matches ? "dark" : "light")

    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: any) => {
      console.log("e.matches  ", e.matches)
      setTheme(e.matches ? "dark" : "light")
    }

    mediaQueryList.addEventListener("change", handleChange)
    return () => mediaQueryList.removeEventListener("change", handleChange)
  }, [])

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    changeTheme(newTheme)
  }

  return (
    <StrictMode>
      <BrowserRouter>
        {/* Pass toggleTheme function and current theme as props to App component */}
        <App toggleTheme={toggleTheme} currentTheme={theme} />
      </BrowserRouter>
    </StrictMode>
  )
}

root.render(<RootComponent />)

reportWebVitals()
