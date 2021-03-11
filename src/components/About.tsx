import React from "react";
import { Flex, useColorMode, Text, Heading, Box } from "@chakra-ui/react";
import { Layout } from "./Layout";
import { Wrapper } from "./Wrapper";
import { UseResponsiveCheck } from "../hooks/useResponsiveCheck";

const About: React.FC = ({}) => {
  const { isMobile, isTablet, isDesktop } = UseResponsiveCheck();

  return (
    <Wrapper>
      <Box
        pt={20}
        minH={900}
        id="about"
        display={isMobile ? "" : "flex"}
        justifyContent="center"
        alignItems="center"
        textAlign={isMobile ? "center" : "inherit"}
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
          Greetings dear reader! My name is Connor Mahan and I'm a full-stack
          developer hailing from the great state of Montana. While working as a
          corporate banker in San Francisco, I came to realize my knack for
          automating some of our monotonous processes. Between writing Excel
          scripts and responding to client emails, I found myself designing app
          mock ups in Photoshop, which spawned my interest in software
          engineering. A friend introduced me to Zed Shaw's "Learn Python The
          Hard Way", and on Hello World, my career interests completely shifted
          to coding. Upon finishing the book's curriculum, I also completed
          Codecademy's Full Stack Web Developer Bootcamp, which gave me a basic
          understanding of JavaScript, HTML, CSS, React, Node, SQL, and Express.
          <br />
          <br />
          Since completing my bootcamp, I've completed several personal and
          freelance projects, some of which are listed below. Currently, I'm an
          engineer at Lyric Keeper, where I've learned the intricacies of
          TypeScript, GraphQL, Apollo, React, Express, Firebase, Git, and
          PostgreSQL, among countless other 3rd party libraries.
          <br />
          <br />
          While away from the computer, I spend most of my time getting lost in
          the mountains of Northern California. From the command line to the
          tree line, my passion for solving problems and finding joy in
          overcoming challenges remains a central focus.
          <br />
          <br />
          Thank you for taking the time to check out my portfolio. If you like
          what you see, please feel free to reach out. I'm currently looking for
          new opportunities and would be happy to connect!
        </Text>
      </Box>
    </Wrapper>
  );
};

export default About;
