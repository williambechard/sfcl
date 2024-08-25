import { MoonIcon } from "../Icons/MoonIcon"
import { SunIcon } from "../Icons/SunIcon"
import { Switch, cn } from "@nextui-org/react"
import React, { useEffect } from "react"

interface ToggleThemeProps {
  themeSetter: () => void
  currentTheme: string
}

export const ToggleTheme: React.FC<ToggleThemeProps> = ({
  themeSetter,
  currentTheme,
}) => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(
    currentTheme === "dark",
  )

  const handleThemeChange = () => {
    themeSetter()
  }

  useEffect(() => {
    // look in local storage and apply the correct theme
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      console.log("saved Theme", savedTheme)
      setIsDarkMode(savedTheme === "dark")
    }
  }, [])

  return (
    <Switch
      checked={isDarkMode}
      onChange={handleThemeChange}
      size="lg"
      classNames={{
        wrapper: cn("group-data-[selected=true]:bg-accent-2"),
      }}
      endContent={<MoonIcon />}
      startContent={<SunIcon />}
    />
  )
}
