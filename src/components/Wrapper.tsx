import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
  variant?: WrapperVariant;
  bgTone?: { light: string; dark: string };
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
  bgTone,
}) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.900" };
  const color = { light: "black", dark: "white" };

  return (
    <Box
      bgColor={bgTone ? bgTone[colorMode] : bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Box mt={0} mx="auto" px={variant === "regular" ? "10%" : "20%"} w="100%">
        {children}{" "}
      </Box>
    </Box>
  );
};
