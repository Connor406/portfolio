import { Box, Button, Flex, Link, useColorMode } from "@chakra-ui/react"
import { BlackOpac, CardGreen, LightGreen, PinkOpac, White, WhiteOpac } from "@/colorVars"
import { MotionBox } from "@/components/Motion/Motion"
import { Wrapper } from "@/components/Wrapper"
import { projects } from "./projectData"

const Projects: React.FC = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: LightGreen, dark: WhiteOpac }
  const bgCard = { light: BlackOpac, dark: CardGreen }
  const color = { light: White, dark: "black" }
  const projColor = { light: BlackOpac, dark: White }
  const test = { light: LightGreen, dark: "none" }
  const borderFlicker = { light: "0px", dark: "4px" }

  return (
    <Wrapper bgTone={{ light: PinkOpac, dark: BlackOpac }} bgPic="url('/bgplant.jpg')">
      <Box
        id="projects"
        pt={60}
        textAlign="center"
        fontSize={70}
        fontFamily="Tues Night"
        fontWeight={600}
        color={projColor[colorMode]}
      >
        Projects
      </Box>
      <Flex
        flexDirection="row"
        justifyContent="space-evenly"
        fontFamily="Montserrat, sans-serif"
        fontWeight="400"
        flexWrap="wrap"
        pb={40}
      >
        {projects.map(item => {
          return (
            <Box key={item.name}>
              <MotionBox
                transition={{ duration: 0.8, delay: 2 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: [0, 1.1, 1] }}
                mx={3}
                my={6}
                h={500}
                w={300}
                border={borderFlicker[colorMode]}
                borderColor={bgCard[colorMode]}
                shadow="dark-lg"
                css={{ backdropFilter: "blur(3px)" }}
                borderRadius={24}
                bgColor={test[colorMode]}
                color={projColor[colorMode]}
              >
                <Box w="100%" textAlign="center" pt={2} fontSize={32}>
                  {item.name}
                </Box>
                <Box
                  bgImage={`url(${item.picSrc})`}
                  bgPos="center"
                  bgSize="cover"
                  bgRepeat="no-repeat"
                  minH={285}
                  mx={5}
                  mt={5}
                >
                  <MotionBox
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                    minH={285}
                    pt={4}
                    bgColor={BlackOpac}
                    transitionDuration=".5s"
                    textAlign="center"
                    color={"white"}
                  >
                    {item.description}
                    <Box mt={4}>Tools used: {item.tools}</Box>
                  </MotionBox>
                </Box>
                {item.link && (
                  <Link href={item.link} target="_blank" _hover={{ textDecor: "none" }}>
                    <Button
                      textAlign="center"
                      w={140}
                      mt={5}
                      ml={79}
                      boxShadow="dark-lg"
                      bgColor={bgColor[colorMode]}
                      color={projColor[colorMode]}
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight="300"
                      fontSize={22}
                      _hover={{
                        color: color[colorMode],
                        bgColor: bgCard[colorMode],
                      }}
                    >
                      View App
                    </Button>
                  </Link>
                )}
                {item.code && (
                  <Link href={item.code} target="_blank" _hover={{ textDecor: "none" }}>
                    <Button
                      textAlign="center"
                      w={140}
                      mt={5}
                      ml={79}
                      boxShadow="dark-lg"
                      bgColor={bgColor[colorMode]}
                      color={projColor[colorMode]}
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight="300"
                      fontSize={22}
                      _hover={{
                        color: color[colorMode],
                        bgColor: bgCard[colorMode],
                      }}
                    >
                      View Code
                    </Button>
                  </Link>
                )}
              </MotionBox>
            </Box>
          )
        })}
      </Flex>
    </Wrapper>
  )
}

export default Projects
