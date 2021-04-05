import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { DeepBlack } from "../colorVars";

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
  variant?: WrapperVariant;
  bgTone?: { light: string; dark: string };
  bgPic?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
  bgTone,
  bgPic,
}) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: DeepBlack };
  const color = { light: "black", dark: "white" };

  return (
    <Box
      color={color[colorMode]}
      bgImage={bgPic}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box
        mt={0}
        mx="auto"
        px={variant === "regular" ? "10%" : "20%"}
        w="100%"
        bgColor={bgTone ? bgTone[colorMode] : bgColor[colorMode]}
      >
        {children}{" "}
      </Box>
    </Box>
  );
};
