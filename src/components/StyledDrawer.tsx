import { CloseIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BlackOpac, CardGreen, GrayOpac, MainGreen, White } from "../colorVars";
import { DarkModeSwitch } from "./DarkModeSwitch";
import NextLink from "next/link";

interface DrawerProps {
  onClose: any;
  isOpen: any;
  menuItems: {
    text: string;
    yValue: number;
    id: string;
  }[];
  scrollFunction: (value: number) => void;
  color: string;
  onMenuClose: any;
}

export const StyledDrawer: React.FC<DrawerProps> = ({
  onClose,
  isOpen,
  menuItems,
  color,
  onMenuClose,
  scrollFunction,
}) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: White, dark: "gray.900" };
  const textColor = { light: BlackOpac, dark: White };

  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
      <DrawerOverlay>
        <DrawerContent>
          <IconButton
            aria-label="close menu"
            icon={<CloseIcon />}
            // color={textColor[colorMode]}
            variant="ghost"
            pos="absolute"
            right={4}
            top={4}
            onClick={onMenuClose}
            _hover={{
              border: "none",
              textDecoration: "none",
              boxShadow: "none",
            }}
            _focus={{
              boxShadow: "none",
            }}
          />
          <Flex
            flexDir="column"
            justifyContent="space-evenly"
            h="100%"
            bgColor={bgColor[colorMode]}
            color={textColor[colorMode]}
            fontFamily="Tradesmith, sans-serif"
            fontSize="2rem"
            textAlign="center"
            w="100%"
          >
            {menuItems.map((link, key) => {
              return (
                // <NextLink href={link.id} scroll={false}>
                <Link
                  key={key}
                  href={link.id}
                  _hover={{
                    color: { color },
                  }}
                >
                  {link.text}
                </Link>
                // </NextLink>
              );
            })}
            <DarkModeSwitch />
          </Flex>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
