import { Switch, useColorMode } from "@chakra-ui/react"
import { UseResponsiveCheck } from "@/hooks/useResponsiveCheck"

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"
  const { isMobile } = UseResponsiveCheck()

  return (
    <Switch
      position="fixed"
      top={isMobile ? null : "1rem"}
      bottom={isMobile ? "1rem" : null}
      right="1rem"
      isChecked={isDark}
      onChange={toggleColorMode}
      colorScheme="green"
    />
  )
}
