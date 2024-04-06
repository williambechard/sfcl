import { MoonIcon } from "../Icons/MoonIcon"
import { SunIcon } from "../Icons/SunIcon"
import { Switch, cn } from "@nextui-org/react"
import React from "react"

interface ToggleThemeProps {
  themeSetter: () => void
  currentTheme: string
}

export const ToggleTheme: React.FC<ToggleThemeProps> = ({
  themeSetter,
  currentTheme,
}) => {
  const isDarkMode = currentTheme === "dark"

  const handleThemeChange = () => {
    themeSetter()
  }

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
