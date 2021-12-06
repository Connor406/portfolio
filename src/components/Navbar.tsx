import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Flex, IconButton, Link, useColorMode } from "@chakra-ui/react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { AnimatePresence, AnimateSharedLayout } from "framer-motion"
import React, { useEffect, useState } from "react"
import { FaAngellist, FaGithub, FaLinkedin } from "react-icons/fa"
import { BlackOpac, MainGreen } from "../colorVars"
import { UseResponsiveCheck } from "../hooks/useResponsiveCheck"
import { DarkModeSwitch } from "./DarkModeSwitch"
import Loader from "./Loader"
import { MotionBox, MotionLink } from "./Motion/Motion"
import { StyledDrawer } from "./StyledDrawer"

export const Navbar: React.FC = ({}) => {
  const { colorMode } = useColorMode()
  const hoverColor = { light: "white", dark: MainGreen }
  const color = { light: "rgba(48,48,48,.6)", dark: "#fffffffc" }
  const [scrollY, setScrollY] = useState(0)
  const { isMobile } = UseResponsiveCheck()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  useScrollPosition(({ currPos }) => {
    setScrollY(-currPos.y)
  })

  const OnClickScroll = (value: number) => {
    window.scrollTo({ top: value, behavior: "smooth" })
  }

  const navbarLinks = [
    {
      text: isMobile ? "Home" : "<ConnorCodes />",
      yValue: 0,
      id: "/#home",
      layoutId: "logo",
    },
    {
      text: "About",
      yValue: isMobile ? 656 : 778,
      id: "/#about",
    },
    {
      text: "Projects",
      yValue: isMobile ? 2031 : 1667,
      id: "/#projects",
    },
    {
      text: "Hire Me!",
      yValue: 6000,
      id: "/#contact",
    },
  ]

  const buttonIcons = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/Connor406",
      aria: "git hub",
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/connor-mahan406/",
      aria: "linked in",
    },
    {
      icon: <FaAngellist size={24} />,
      href: "https://angel.co/u/connor-mahan",
      aria: "angel list",
    },
  ]

  return (
    <div id="home">
      <AnimateSharedLayout>
        <MotionBox>
          {/* isMobile but menu not open */}
          {isMobile ? (
            <>
              <IconButton
                variant="ghost"
                boxShadow="none"
                fontSize="1.8rem"
                aria-label="menu"
                icon={<HamburgerIcon />}
                color={color[colorMode]}
                pos="fixed"
                right={4}
                top={4}
                onClick={() => setMenuIsOpen(!menuIsOpen)}
                _hover={{
                  border: "none",
                  textDecoration: "none",
                  boxShadow: "none",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              />
              <StyledDrawer
                onMenuClose={() => setMenuIsOpen(false)}
                color={hoverColor[colorMode]}
                scrollFunction={OnClickScroll}
                onClose={() => setMenuIsOpen(false)}
                isOpen={menuIsOpen}
                menuItems={navbarLinks}
              />
              <AnimatePresence>
                {isLoading && <Loader isMobile={isMobile} key="key" />}
              </AnimatePresence>
            </>
          ) : (
            // Tablet & Desktop view
            <>
              <Flex
                zIndex={5}
                position="fixed"
                w="100%"
                m="auto"
                top={0}
                p={4}
                bg={scrollY > 528 ? BlackOpac : "transparent"}
                transitionDuration=".3s"
              >
                <Flex
                  ml={4}
                  w="100%"
                  flex={1}
                  layoutId="header"
                  justifyContent="space-evenly"
                  alignItems="center"
                  color={scrollY > 528 ? "white" : color[colorMode]}
                >
                  {navbarLinks.map((link, key) => {
                    return (
                      <MotionLink
                        key={key}
                        layoutId={link.layoutId}
                        _hover={{
                          color: hoverColor[colorMode],
                        }}
                        onClick={() => OnClickScroll(link.yValue)}
                      >
                        {link.text}
                      </MotionLink>
                    )
                  })}
                  <Link
                    _hover={{
                      color: hoverColor[colorMode],
                    }}
                    href="/Connor-Mahan-Resume.pdf"
                    target="_blank"
                  >
                    Resume
                  </Link>

                  <Box>
                    {buttonIcons.map(icon => {
                      return (
                        <IconButton
                          as={Link}
                          aria-label={icon.aria}
                          variant="ghost"
                          href={icon.href}
                          target="_blank"
                          icon={icon.icon}
                          _hover={{
                            color: hoverColor[colorMode],
                            transform: "rotate(360deg)",
                            transition: ".8s",
                          }}
                        />
                      )
                    })}
                  </Box>
                  <DarkModeSwitch />
                </Flex>
              </Flex>
              <AnimatePresence>
                {isLoading && <Loader isMobile={isMobile} key="key" />}
              </AnimatePresence>
            </>
          )}
        </MotionBox>
      </AnimateSharedLayout>
    </div>
  )
}
