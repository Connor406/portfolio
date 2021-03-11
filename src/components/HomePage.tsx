import { Box, extendTheme, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import { BrightPink, MainGreen } from "../colorVars";
import { UseResponsiveCheck } from "../hooks/useResponsiveCheck";
import { Layout } from "./Layout";

const HomePage: React.FC = ({}) => {
  const { isMobile, isTablet, isDesktop } = UseResponsiveCheck();
  const { colorMode } = useColorMode();
  const color = { light: "black", dark: MainGreen };

  console.log("mobile:", isMobile);
  console.log("tablet:", isTablet);

  return (
    <Box minH={640} color={color[colorMode]} pt={20}>
      <Heading
        fontSize={!isMobile ? 194 : 160}
        fontFamily="Tues Night"
        ml="5%"
        mt={19}
        w={80}
        transitionDuration=".5s"
        _hover={{
          color: BrightPink,
        }}
      >
        Fun
      </Heading>
      <Heading
        fontSize={!isMobile ? 124 : 114}
        fontFamily="Tradesmith"
        maxW={550}
        ml="5%"
        transform="skewX(-9deg)"
        transitionDuration=".5s"
      >
        meets
      </Heading>
      <Heading
        fontSize={!isMobile ? 124 : 57}
        fontFamily="Tradesmith"
        maxW={700}
        ml="5%"
        transform="skewX(9deg)"
        transitionDuration=".5s"
        lineHeight={0.4}
      >
        functional
      </Heading>
    </Box>
  );
};

export default HomePage;
