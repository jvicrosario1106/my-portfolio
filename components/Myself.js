import React from "react";
import { Box, Button, Text, useColorMode } from "@chakra-ui/react";

const Myself = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Box
        bgImage={"background18.jpg"}
        backgroundSize={"cover"}
        p={["30px", "30px", "90px", "90px"]}
        mt={["300px", "430px", "0px", "0px"]}
      >
        <Box
          borderWidth={"1px"}
          bg="white"
          color="black"
          width="100%"
          p="60px"
          textAlign={"center"}
        >
          <Text
            fontSize={["2xl", "2xl", "3xl", "3xl"]}
            color="green.300"
            className="fontStyle"
          >
            About Myself
          </Text>
          <Text
            mt="20px"
            mb="20px"
            fontSize={["3xl", "3xl", "5xl", "5xl"]}
            className="fontStyle"
          >
            I love building an end to end software solution to help the business{" "}
            <Text as="span" textDecor={"underline"}>
              optimize
            </Text>{" "}
            and{" "}
            <Text as="span" textDecor={"underline"}>
              streamline their process
            </Text>
            .
          </Text>
          <Button mt="20px" fontSize={"2xl"} p="28px" bg="green.200">
            Download Resume
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Myself;
