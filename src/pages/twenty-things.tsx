import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MainGreen } from "../colorVars";
import { Layout } from "../components/Layout";

const TwentyThings: React.FC = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: MainGreen, dark: "gray.900" };

  return (
    <Layout>
      <Box minH={640}>howdy</Box>
    </Layout>
  );
};

export default TwentyThings;
