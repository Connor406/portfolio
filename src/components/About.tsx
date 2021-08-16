import React from "react"
import { Flex, useColorMode, Text, Heading, Box } from "@chakra-ui/react"
import { Layout } from "./Layout"
import { Wrapper } from "./Wrapper"
import { UseResponsiveCheck } from "../hooks/useResponsiveCheck"
import { BlackOpac, DeepBlack, MainGreen } from "../colorVars"

const About: React.FC = ({}) => {
  const { isMobile, isTablet, isDesktop } = UseResponsiveCheck()

  return (
    <Wrapper bgTone={{ light: "inherit", dark: DeepBlack }}>
      <Box
        py={20}
        minH={920}
        id="about"
        display={isMobile ? "" : "flex"}
        justifyContent="center"
        alignItems="center"
        textAlign="inherit"
      >
        <Heading
          transform={isMobile ? "" : "rotate(270deg)"}
          h={100}
          fontFamily="Tues Night"
          fontSize={isDesktop || isMobile ? "3rem" : "2rem"}
        >
          Story Time
        </Heading>
        <Text w={isMobile ? "80%" : "60%"}>
          Greetings dear reader! My name is Connor Mahan and I'm a Full-Stack Developer hailing from
          the great state of Montana. While working as a corporate banker in San Francisco, I came
          to realize my knack for automating some of our monotonous processes. Between writing Excel
          scripts and responding to client emails, I found myself designing app mock ups in
          Photoshop, which spawned my interest in software engineering. A friend introduced me to
          Zed Shaw's "Learn Python The Hard Way", and on Hello World, my career interests completely
          shifted to coding. Upon finishing the book's curriculum, I also completed Codecademy's
          Full Stack Web Developer Bootcamp, which gave me a basic understanding of of modern web
          development tools and practices, including JavaScript, HTML, CSS, React, Node, SQL, and
          Express.
          <br />
          <br />
          Currently, I'm an engineer at{" "}
          <a style={{ color: MainGreen, fontWeight: 900 }} href="https://agrograph.com/">
            Agrograph
          </a>
          , where I've furthered my knowledge of TypeScript, React, Node, Git, and PostgreSQL.
          Additionally, I've gained skills with geospatial data including GeoJSON, MapBox, and
          PostGIS.
          <br />
          <br />
          While away from the computer, I spend most of my time getting lost in the mountains. From
          the command line to the tree line, my passion for solving problems and finding joy in
          overcoming challenges remains a central focus.
          <br />
          <br />
          Thank you for taking the time to check out my portfolio. If you like what you see, please
          feel free to reach out. I'm currently looking for new opportunities and would be happy to
          connect!
        </Text>
      </Box>
    </Wrapper>
  )
}

export default About
