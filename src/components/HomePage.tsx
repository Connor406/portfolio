import { Heading, Image, useColorMode } from "@chakra-ui/react"
import * as Colors from "@/colorVars"
import { UseResponsiveCheck } from "@/hooks/useResponsiveCheck"
import { MotionBox, MotionHeading } from "./Motion/Motion"
import Lightning from "./Icons/Lightning"

const HomePage: React.FC = ({}) => {
  const { isMobile, isTablet, isDesktop } = UseResponsiveCheck()
  const { colorMode } = useColorMode()
  const color = { light: Colors.MainYellow, dark: Colors.MainGreen }

  const secondVariant = {
    animate: { y: 0 },
    initial: { y: 1000 },
  }

  return (
    <MotionBox minH={640} color={color[colorMode]} pt={20}>
      <Lightning />
      <MotionBox
        animate={{ x: 0 }}
        initial={{ x: 1000 }}
        transition={{
          duration: 1.2,
          type: "spring",
        }}
      >
        <MotionHeading
          mt={19}
          fontSize={!isMobile ? 194 : 160}
          fontFamily="Tues Night"
          textShadow="10px 10px 10px black"
          ml="5%"
          w={80}
          initial={{ color: Colors.MainPink }}
          animate={{ color: color[colorMode] }}
          transition={{
            duration: 1,
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
          type: "spring",
        }}
      >
        <Heading
          fontSize={!isMobile ? 124 : 114}
          fontFamily="Tradesmith"
          maxW={550}
          ml="5%"
          textShadow="10px 10px 10px black"
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
          type: "spring",
        }}
      >
        <MotionHeading
          fontSize={!isMobile ? 124 : 57}
          fontFamily="Tradesmith"
          maxW={700}
          ml="5%"
          transform="skewX(9deg)"
          textShadow="10px 10px 10px black"
          lineHeight={0.4}
        >
          functional
        </MotionHeading>
      </MotionBox>
    </MotionBox>
  )
}

export default HomePage
