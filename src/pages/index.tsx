import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MainGreen } from "../colorVars";
import About from "../components/About";
import { ContactMe } from "../components/ContactMe";
import HomePage from "../components/HomePage";
import { Layout } from "../components/Layout";
import { Projects } from "../components/Projects/Projects";
import "./index.css";
import Head from "next/head";

const Index = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: MainGreen, dark: "gray.900" };
  const color = { light: "black", dark: MainGreen };
  const faviconColor = { light: "/favicon.png", dark: "/favicon-dark.png" };

  return (
    <>
      <Head>
        <title>Connor Mahan || Portfolio</title>
        <link rel="shortcut icon" href={faviconColor[colorMode]} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link href="index.css" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box>
        <Layout variant="regular">
          <HomePage />
          <About />
          <Projects />
          <ContactMe />
        </Layout>
      </Box>
    </>
  );
};

export default Index;
