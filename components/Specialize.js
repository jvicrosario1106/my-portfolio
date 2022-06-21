import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const Specialize = () => {
  return (
    <div id="aboutme">
      <Flex
        justifyContent="space-between"
        alignItems={"center"}
        flexDirection={"column"}
        mt={["100px", "100px", "110px", "110px"]}
      >
        <Text fontWeight={"bold"} fontSize={"3xl"} className="fontStyle">
          What i love to do
        </Text>
        <Text
          width={["70%", "70%", "50%", "50%"]}
          textAlign={"justify"}
          mt="10px"
          fontSize={"lg"}
        >
          I&apos;m interested and passionate to learn Software Development using
          Javascript, Python, Go and other tools or Frameworks as well as{" "}
          <Text as="span" style={{ borderBottom: "1px solid black" }}>
            DevOps
          </Text>
          ,{" "}
          <Text as="span" style={{ borderBottom: "1px solid black" }}>
            Backend
          </Text>
          ,{" "}
          <Text as="span" style={{ borderBottom: "1px solid black" }}>
            Frontend Development
          </Text>{" "}
          and{" "}
          <Text as="span" style={{ borderBottom: "1px solid black" }}>
            Data Analytics
          </Text>
          . Maybe in the future i will able to expand my skills in{" "}
          <Text as="span" style={{ borderBottom: "1px solid black" }}>
            Cloud Computing
          </Text>{" "}
          using different Cloud Platforms
        </Text>

        <Flex
          width="100%"
          mt="30px"
          justifyContent={"space-evenly"}
          alignItems={"center"}
          flexDirection={["column", "column", "row", "row"]}
        >
          <Box
            p="20px"
            mt="10px"
            borderWidth={"1px"}
            borderRadius={"lg"}
            display="flex"
            flexDirection={"column"}
            width={["80%", "80%", "30%", "30%"]}
            textAlign={"center"}
            _hover={{
              cursor: "pointer",
              bg: "green.100",
              color: "black",
              transition: "0.3s ease-in",
            }}
            fontSize="lg"
            boxShadow={"1px 2px 6px -4px"}
          >
            <Image
              alt="Software"
              src={"/software.svg"}
              width={"60vw"}
              height={"60vh"}
            />
            <Text mt="30px" fontWeight={"bold"} fontSize={"lg"}>
              Data Analytics
            </Text>
            <Text mt="20px" textAlign={"justify"}>
              Being a Major in IT Analytics gives me insights on how data can
              help business to come up with better decision with their services
              and products. I&apos;ve learned some of the ML models and how to
              integrate models in software application.
            </Text>
          </Box>
          <Box
            p="20px"
            mt="10px"
            borderWidth={"1px"}
            borderRadius={"lg"}
            display="flex"
            flexDirection={"column"}
            width={["80%", "80%", "30%", "30%"]}
            textAlign={"center"}
            _hover={{
              cursor: "pointer",
              bg: "green.100",
              color: "black",
              transition: "0.3s ease-in",
            }}
            fontSize="lg"
            boxShadow={"1px 2px 6px -4px"}
          >
            <Image
              alt="Client"
              src={"/client.svg"}
              width={"60vw"}
              height={"60vh"}
            />
            <Text mt="30px" fontWeight={"bold"} fontSize={"lg"}>
              Frontend Development
            </Text>
            <Text mt="20px" textAlign={"justify"}>
              I&apos;ve done a lot of research and youtube reviews about
              frontend frameworks like React and Svelte. Currently, i&apos;m
              still progressing and learning about frontend development,
              especially in animations and some of the best practices.
            </Text>
          </Box>
          <Box
            p="20px"
            mt="10px"
            borderWidth={"1px"}
            borderRadius={"lg"}
            display="flex"
            flexDirection={"column"}
            width={["80%", "80%", "30%", "30%"]}
            textAlign={"center"}
            _hover={{
              cursor: "pointer",
              bg: "green.100",
              color: "black",

              transition: "0.3s ease-in",
            }}
            fontSize="lg"
            boxShadow={"1px 2px 6px -4px"}
          >
            <Image
              alt=" Server"
              src={"/server.svg"}
              width={"60vw"}
              height={"60vh"}
            />
            <Text mt="30px" fontWeight={"bold"} fontSize={"lg"}>
              Backend Development
            </Text>
            <Text mt="20px" textAlign={"justify"}>
              I&apos;m fascinated on how the data can be stored and manage in
              the server. Backend development is one my of main strengths in
              developing a good quality software that brings a excellent results
              for the user
            </Text>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Specialize;
