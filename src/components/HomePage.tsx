import { Box, ColorModeProvider, forwardRef, Heading, useColorMode } from "@chakra-ui/react"
import { isValidMotionProp, motion } from "framer-motion"
import React from "react"
import { BrightPink, MainGreen, MainPink } from "../colorVars"
import { UseResponsiveCheck } from "../hooks/useResponsiveCheck"
import { MotionBox, MotionHeading } from "./Motion/Motion"

const HomePage: React.FC = ({}) => {
  const { isMobile, isTablet, isDesktop } = UseResponsiveCheck()
  const { colorMode } = useColorMode()
  const color = { light: "rgba(22, 22, 29, 1)", dark: MainGreen }

  const secondVariant = {
    animate: { y: 0 },
    initial: { y: 1000 },
  }

  return (
    <MotionBox minH={640} color={color[colorMode]} pt={20}>
      <MotionBox
        animate={{ x: 0 }}
        initial={{ x: 1000 }}
        transition={{
          duration: 1.2,
          delay: isMobile ? 0.3 : 1.3,
          type: "spring",
        }}
      >
        <MotionHeading
          mt={19}
          fontSize={!isMobile ? 194 : 160}
          fontFamily="Tues Night"
          ml="5%"
          w={80}
          initial={{ color: MainPink }}
          animate={{ color: color[colorMode] }}
          transition={{
            duration: 1,
            delay: isMobile ? 0.5 : 1.5,
          }}
        >
          Fun
        </MotionHeading>
      </MotionBox>
      <MotionBox
        variants={secondVariant}
        animate="animate"
        initial="initial"
        transition={{
          duration: 1,
          delay: 1,
          type: "spring",
        }}
      >
        <Heading
          fontSize={!isMobile ? 124 : 114}
          fontFamily="Tradesmith"
          maxW={550}
          ml="5%"
          transform="skewX(-9deg)"
        >
          meets
        </Heading>
      </MotionBox>
      <MotionBox
        animate={{ x: 0, y: 0 }}
        initial={{ x: 1000, y: 1000 }}
        transition={{
          duration: 1,
          delay: isMobile ? 0.5 : 1.5,
          type: "spring",
        }}
      >
        <MotionHeading
          fontSize={!isMobile ? 124 : 57}
          fontFamily="Tradesmith"
          maxW={700}
          ml="5%"
          transform="skewX(9deg)"
          lineHeight={0.4}
        >
          functional
        </MotionHeading>
      </MotionBox>
    </MotionBox>
  )
}

export default HomePage
