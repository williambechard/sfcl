import React, { createContext, StrictMode, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import { ThemeContext } from "./hooks/useTheme"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const RootComponent = () => {
  // Define state to manage the theme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    return (
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    )
  })

  const changeTheme = (target: string) => {
    setTheme(target)
    // Update the data-theme attribute on the root HTML element
    document.documentElement.setAttribute("data-theme", target)
    // Save the theme in local storage
    localStorage.setItem("theme", target)
  }

  // Watch for changes in system theme preference
  useEffect(() => {
    const useDark = window.matchMedia("(prefers-color-scheme: dark)")
    changeTheme(useDark.matches ? "dark" : "light")

    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: any) => {
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
        <ThemeContext.Provider value={theme}>
          {/* Pass toggleTheme function and current theme as props to App component */}
          <App toggleTheme={toggleTheme} currentTheme={theme} />
        </ThemeContext.Provider>
      </BrowserRouter>
    </StrictMode>
  )
}

root.render(<RootComponent />)

reportWebVitals()
