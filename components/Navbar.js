import React from "react";
import {
  Text,
  Container,
  useColorMode,
  Code,
  IconButton,
  Flex,
  Button,
  Tooltip,
  Stack,
  Box,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      {/* Web View Reponsive */}
      <Flex
        px="100px"
        py="10px"
        as="header"
        shadow="md"
        justifyContent="space-around"
        display={["none", "none", "flex", "flex"]}
      >
        <Flex alignItems="center">
          <Stack direction="row" color="white.300" spacing="30px">
            <Text _hover={{ opacity: 1 }} opacity="0.6">
              <Link href="/">Home</Link>
            </Text>
            <Text _hover={{ opacity: 1 }} opacity="0.6">
              <Link href="#aboutme">About Me</Link>
            </Text>

            <Text _hover={{ opacity: 1 }} opacity="0.6">
              <Link href="#footer">Contact</Link>
            </Text>
          </Stack>
        </Flex>
        <Tooltip label="Color Mode">
          <IconButton
            color={colorMode === "dark" && "green.200"}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Tooltip>
      </Flex>

      {/* Mobile View Responsive */}
      <Flex
        py="10px"
        px="10px"
        shadow="md"
        alignItems="flex-start"
        display={["flex", "flex", "none", "none"]}
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <Link href="/">Home</Link>
            </MenuItem>
            <MenuItem>About Me</MenuItem>

            <MenuItem>Contact</MenuItem>
          </MenuList>
        </Menu>
        <Tooltip label="Color Mode">
          <IconButton
            color={colorMode === "dark" && "green.200"}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Tooltip>
      </Flex>
    </div>
  );
};

export default Navbar;
