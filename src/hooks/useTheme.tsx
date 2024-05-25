import { createContext, useContext } from "react"

export const ThemeContext = createContext("dark") // Export the createContext

const useTheme = () => useContext(ThemeContext)

export { useTheme }
