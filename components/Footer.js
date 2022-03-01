import React from "react";
import {
  Box,
  Text,
  Button,
  Stack,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div id="footer">
      <Box height={"83vh"} p="100px">
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text fontSize="lg" className="fontStyle">
            What&apos;s new to me?
          </Text>

          <Text fontSize={["4xl", "5xl", "6xl"]} fontWeight={"bold"}>
            Get in Touch
          </Text>
          <Text
            fontSize="lg"
            width={["100%", "100%", "100%", "50%"]}
            textAlign={"center"}
            mt="20px"
            mb="30px"
            opacity="0.6"
            className="fontStyle"
          >
            Currently, I&apos;m finding the best job that suits my personality
            and capability to do my job well and professional. My inbox is
            always open, if you want to say something or say hi, i will try to
            reply as soon as possible.
          </Text>
          <a href="mailto:jvrosario1106@gmail.com?subject=Let's Talk&body=Hello JV, How are you?">
            {" "}
            <Button size={"lg"} bg="green.200" color="black">
              Let&apos;s talk
            </Button>
          </a>
        </Box>
      </Box>
      <footer>
        <Box
          className="fontStyle"
          p="20px"
          display="flex"
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text fontStyle={"italic"}>Design & Build by JV Rosario</Text>
          <Stack direction="row" mt="5px" spacing="20px">
            <Tooltip label="Linkedin">
              <IconButton icon={<AiFillLinkedin size={30} />} />
            </Tooltip>
            <Tooltip label="Github">
              <IconButton icon={<AiFillGithub size={30} />} />
            </Tooltip>
            <Tooltip label="Instagram">
              <IconButton icon={<AiFillInstagram size={30} />} />
            </Tooltip>
            <Tooltip label="Twitter">
              <IconButton icon={<AiFillTwitterSquare size={30} />} />
            </Tooltip>
          </Stack>
        </Box>
      </footer>
    </div>
  );
};

export default Footer;
