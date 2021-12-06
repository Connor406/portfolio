import { Box, Button, Divider, Flex, Link, Text, useColorMode } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { IoLocationSharp } from "react-icons/io5"
import { IoIosAirplane } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { BlackOpac, BrightPink, BrightYellow, MainGreen } from "../colorVars"
import { Wrapper } from "./Wrapper"
import { UseResponsiveCheck } from "../hooks/useResponsiveCheck"

export const ContactMe: React.FC = () => {
  const { colorMode } = useColorMode()
  const buttonColor = { light: "white", dark: "gray.900" }
  const color = { light: "black", dark: MainGreen }
  const { isMobile, isTablet, isDesktop } = UseResponsiveCheck()

  return (
    <Wrapper>
      <Text id="contact" pt={20} mr={4} fontFamily="Tradesmith" fontSize="5rem" lineHeight={1}>
        Drop A Line
      </Text>
      <Box fontFamily='"Montserrat",sans-serif' fontSize="1.5rem">
        <Box display="flex" w={isMobile ? "auto" : "40%"} alignItems="center" my={3}>
          <IoLocationSharp />
          <Text ml={2}>Chicago, IL</Text>
        </Box>
        <Box display="flex" w={isMobile ? "auto" : "40%"} alignItems="center" my={3}>
          <IoIosAirplane />
          <Text ml={2} fontSize={isMobile ? "1rem" : "1.2rem"}>
            Willing to relocate for the right opportunity
          </Text>
        </Box>
        <Box display="flex" w={isMobile ? "auto" : "40%"} alignItems="center" my={3}>
          <MdEmail />
          <Text fontSize={isMobile ? "1rem" : "1.2rem"} ml={2}>
            Mahan406@gmail.com
          </Text>
        </Box>
      </Box>
      <Link
        href="/Connor-Mahan-Resume.pdf"
        target="_blank"
        _hover={{
          border: "none",
          textDecoration: "none",
          boxShadow: "none",
        }}
      >
        <Button
          bgColor={BrightPink}
          color={buttonColor[colorMode]}
          _hover={{ bgColor: BrightYellow, color: BlackOpac }}
          boxShadow="dark-lg"
          mb={4}
        >
          Resume
        </Button>
      </Link>
    </Wrapper>
  )
}
