import { Box, Button, Flex, Link, useColorMode } from "@chakra-ui/react";
import React from "react";
import {
  BlackOpac,
  BlueGreen,
  CardGreen,
  GrayOpac,
  LightGreen,
  MainGreen,
  PinkOpac,
  White,
  WhiteOpac,
} from "../../colorVars";
import { Wrapper } from "../Wrapper";

const Projects: React.FC = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: LightGreen, dark: WhiteOpac };
  const bgCard = { light: BlackOpac, dark: CardGreen };
  const color = { light: White, dark: "black" };
  const projColor = { light: BlackOpac, dark: White };
  const test = { light: LightGreen, dark: "none" };
  const borderFlicker = { light: "0px", dark: "4px" };

  let projects = [
    {
      name: "Lyric Keeper",
      link: "https://www.lyrickeeper.com/",
      picSrc: "/lklogo.jpg",
      tools: "Typescript, React, GraphQL, PostgreSQL, Apollo, Firebase",
      description:
        "A tool for musicians to create setlists, store song lyrics, and display scrolling lyrics for real-time performances",
    },
    {
      name: "Pint Hunter",
      code: "https://github.com/Connor406/Pint-Hunter",
      link: "https://pint-hunter.vercel.app/",
      tools: "NextJS, React, TypeScript, Rest API, Chakra UI",
      picSrc: "./pint.png",
      description:
        "Pint Hunter is a tool that lets users search for breweries by name, city, state, or zipcode",
    },
    {
      name: "Reddit-ish",
      code: "https://github.com/Connor406/Reddit-clone-backend",
      picSrc: "./redditish.png",
      description:
        "A fullstack Reddit clone with custom authentication, allowing users to create, read, update, and delete posts as well as vote on other users' posts",
      tools: "NextJS, React, GraphQL, Redis, PostgreSQL, Apollo, Chakra UI",
    },

    // {
    //   name: "Dart Scoreboard",
    //   code: "https://github.com/Connor406/Dart-score-keeper",
    //   link: "",
    //   picSrc: "/dart.png",
    //   tools:
    //     "Typescript, React Native, Styled Components, coming soon: GraphQL, PostgreSQL, Apollo ",
    //   description:
    //     "This React Native app allows users to create a game of 1 to 4 players with several different game variations and keeps track of the score. Working to add sign in and remote game play options for socially distanced dart gaming",
    // },
    {
      name: "Nelp",
      code: "https://github.com/Connor406/nelp/tree/master",
      link: "https://connor406.github.io/nelp/",
      picSrc: "/nelp.jpg",
      tools: "Javascript, React, Yelp's API, HTML, CSS",
      description:
        "Using the Yelp API, this app lets users search for restaurants in their local area",
    },
    {
      name: "Playlistr",
      code: "https://github.com/Connor406/playlistr/tree/master",
      link: "https://connor406.github.io/playlistr/",
      picSrc: "./playlistr.jpg",
      tools: "Javascript, React, Spotify's API, HTML, CSS",
      description:
        "Using the Spotify API, this app lets users create playlists, update existing playlists and save changes directly to their Spotify account",
    },
    {
      name: "This website!",
      code: "https://github.com/Connor406/portfolio",
      link: "https://connorcodes.com",
      picSrc: "./website2.png",
      description:
        "The website you're currently looking at! Complete with Dark Mode, these projects, mobile responsiveness, and most importantly, my resume.",
      tools: "NextJS, React, TypeScript, Chakra UI",
    },
  ];

  return (
    <Wrapper
      bgTone={{ light: PinkOpac, dark: BlackOpac }}
      bgPic="url('/bgplant.jpg')"
    >
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
        {projects.map((item) => {
          return (
            <Box>
              <Box
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
                  <Box
                    minH={285}
                    pt={4}
                    opacity={0}
                    _hover={{
                      opacity: 1,
                      bgColor: BlackOpac,
                    }}
                    transitionDuration=".5s"
                    textAlign="center"
                    color={"white"}
                  >
                    {item.description}
                    <Box mt={4}>Tools used: {item.tools}</Box>
                  </Box>
                </Box>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    _hover={{ textDecor: "none" }}
                  >
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
                ) : null}
                {item.code ? (
                  <Link
                    href={item.code}
                    target="_blank"
                    _hover={{ textDecor: "none" }}
                  >
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
                ) : null}
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Wrapper>
  );
};

export default Projects;
