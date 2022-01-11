import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const Specialize = () => {
  return (
    <div>
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, amet
          aliquam magni quibusdam autem vel velit eius sunt ut adipisci atque
          rerum ullam, odio iusto dolore. Dicta sunt delectus non.
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

              transition: "0.3s ease-in",
            }}
            fontSize="lg"
          >
            <Image src={"/software.svg"} width={"60vw"} height={"60vh"} />
            <Text mt="30px" fontWeight={"bold"} fontSize={"lg"}>
              Software Development
            </Text>
            <Text mt="20px">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam minima perferendis consequuntur iste nam dolor earum
              Quibusdam minima perferendis consequuntur iste nam dolor earum
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

              transition: "0.3s ease-in",
            }}
            fontSize="lg"
          >
            <Image src={"/client.svg"} width={"60vw"} height={"60vh"} />
            <Text mt="30px" fontWeight={"bold"} fontSize={"lg"}>
              Frontend Development
            </Text>
            <Text mt="20px">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam minima perferendis consequuntur iste nam dolor earum
              Quibusdam minima perferendis consequuntur iste nam dolor earum
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

              transition: "0.3s ease-in",
            }}
            fontSize="lg"
          >
            <Image src={"/server.svg"} width={"60vw"} height={"60vh"} />
            <Text mt="30px" fontWeight={"bold"} fontSize={"lg"}>
              Backend Development
            </Text>
            <Text mt="20px">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam minima perferendis consequuntur iste nam dolor earum
              Quibusdam minima perferendis consequuntur iste nam dolor earum
            </Text>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Specialize;
