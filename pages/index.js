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
  Divider,
} from "@chakra-ui/react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Skills from "../components/Skills";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

import Specialize from "../components/Specialize";
import Myself from "../components/Myself";
import Education from "../components/Education";
import Experience from "../components/Experience";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div>
      {/* Intro */}
      <Container maxW="container.xl" mt="60px">
        <Flex direction={["column", "column", "row", "row"]} height="90vh">
          <div>
            <motion.div
              animate={{ x: [-100, 0] }}
              transition={{ duration: 1, type: "tween" }}
            >
              <Text fontSize="lg" fontWeight="bold" opacity="0.6">
                #learnfromit
              </Text>
              <Flex direction="column">
                <motion.div whileHover={{ opacity: 0.6 }}>
                  <Text
                    fontSize={["4xl", "5xl", "6xl", "6xl", "6xl"]}
                    fontWeight="extrabold"
                  >
                    Hi there,
                  </Text>
                </motion.div>
                <motion.div whileHover={{ opacity: 0.6 }}>
                  <Text
                    fontSize={["4xl", "5xl", "6xl", "6xl", "6xl"]}
                    fontWeight="extrabold"
                  >
                    I'm{" "}
                    <Text as="span" color={colorMode == "dark" && "green.200"}>
                      JV
                    </Text>{" "}
                    Rosario
                  </Text>
                </motion.div>
              </Flex>
            </motion.div>

            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
            >
              <Code
                children="<Hello> Welcome to my World </Hello>"
                colorScheme="green"
                fontSize="18px"
                mt="10px"
              />

              <Text
                fontSize="md"
                w={["100%", "100%", "70%", "70%"]}
                mt="25px"
                className="fontStyle"
              >
                I consider myself to be a Full stack software engineer
                specializing in building notable software solution and I'm
                always determined to explore and learn new technology.
              </Text>

              <Link href="#aboutme">
                <Button
                  mt="20px"
                  border={
                    colorMode === "light"
                      ? "1px solid #353b48"
                      : "1px solid white"
                  }
                >
                  About me
                </Button>
              </Link>
            </motion.div>
            <Stack direction="row" mt="50px" spacing="20px">
              <Tooltip label="Linkedin">
                <IconButton icon={<AiFillLinkedin size={30} />} />
              </Tooltip>
              <Tooltip label="Github">
                <a href="https://github.com/jvicrosario1106" target="_blank">
                  <IconButton icon={<AiFillGithub size={30} />} />
                </a>
              </Tooltip>
              <Tooltip label="Instagram">
                <IconButton icon={<AiFillInstagram size={30} />} />
              </Tooltip>
              <Tooltip label="Twitter">
                <a href="https://twitter.com/juliusrosario06" target="_blank">
                  <IconButton icon={<AiFillTwitterSquare size={30} />} />
                </a>
              </Tooltip>
            </Stack>
          </div>
          <div>
            <motion.div
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <Box>
                <Image src="/home.svg" width={800} height={800} alt="Me" />
              </Box>
            </motion.div>
          </div>
        </Flex>

        {/* About Myself */}
        <Myself />

        {/* Specializing */}
        <Specialize />

        {/* Two Words */}
        <Box mt="60px">
          <Text fontSize={[80, 80, 100, 170]} fontWeight={"bold"}>
            Learned yet
          </Text>
          <Text
            className="fontStyle"
            color={colorMode === "dark" && "green.200"}
            float="right"
            fontSize={[80, 80, 100, 200]}
          >
            Curious
          </Text>
        </Box>

        <Box
          mt={["530px", "230px", "330px", "500px"]}
          display="flex"
          alignItems={"center"}
          justifyContent={"space-around"}
          className="fontStyle"
          flexDirection={["column", "column", "row", "row"]}
          borderTop="1px solid rgba(0,0,0,0.1)"
          pt="30px"
        >
          <Image src="/background19.jpg" width={400} height={700} />
          <Box mt={["50px", "50px", "0px", "0px"]}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Programming {"<From2018/>"}{" "}
            </Text>
            <Text
              borderBottom={"1px"}
              _hover={{ borderBottom: "0px" }}
              fontSize={[50, 70, 60, 100]}
            >
              My Journey
            </Text>
            <Text mt="20px" fontWeight={"bold"} opacity={0.6}>
              <Link href="/journey">View More</Link>
            </Text>
          </Box>
        </Box>

        {/* Experience */}
        <Experience />

        {/* Education */}
        <Education />

        {/* List of Skills */}

        {/* <Flex
          direction="column"
          mt={["150px", "100px", "100px", "0px"]}
          mb="60px"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontSize="2xl"
            color="green.300"
            mt={["0px", "60px"]}
            fontWeight="bold"
          >
            {"<Skills>"}
          </Text>
          <Skills />
          <Text fontSize="2xl" color="green.300" fontWeight="bold">
            {"</Skills>"}
          </Text>
        </Flex> */}

        <Flex
          mt={["130px", "130px", "100px", "100px"]}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          p="30px"
        >
          <Box>
            <Text
              fontSize={["2xl", "4xl", "4xl", "5xl", "5xl"]}
              fontWeight="extrabold"
              textAlign="center"
              className="fontStyle"
            >
              ❝ Solve the Problem first. Then Write the{" "}
              <Text as="span" bg="green.200">
                Codes
              </Text>{" "}
              ❞
            </Text>
          </Box>
        </Flex>
      </Container>
    </div>
  );
}
