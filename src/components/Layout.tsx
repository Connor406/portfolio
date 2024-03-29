import { Box, useColorMode } from "@chakra-ui/react"
import { DeepBlack, MainGreen } from "../colorVars"
import { Navbar } from "./Navbar"
import { WrapperVariant } from "./Wrapper"

interface LayoutProps {
  variant?: WrapperVariant
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: MainGreen, dark: DeepBlack }

  return (
    <Box bgImage="url('/bgpic.jpg')" minH={640}>
      <Box w="100%" bg={bgColor[colorMode]} maxH={640}>
        <Navbar />
        {children}
      </Box>
    </Box>
  )
}
