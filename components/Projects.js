import React from "react";
import { Box, Text, Flex, Stack, Badge, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import { DiGithubBadge, DiCode } from "react-icons/di";

const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box mt="400px">
      <Text fontSize="6xl" fontWeight={"bold"}>
        Projects
      </Text>

      <Box mt={"50px"}>
        <Flex
          direction={"column"}
          alignItems="center"
          justifyContent={"space-between"}
          display={["none", "none", "flex", "flex"]}
        >
          <Box>
            <Flex aligItems="center">
              <Image
                className="projects"
                src="/background18.jpg"
                width={600}
                height={350}
              />

              <Box
                h={"270px"}
                mt="25px"
                w={"400px"}
                ml="-50px"
                zIndex={1}
                p="15px"
                boxShadow={"xl"}
                bg="white"
                color={colorMode === "dark" && "black"}
              >
                <Text className="fontStyle" fontSize="2xl" fontWeight={"bold"}>
                  Occupy
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  laborum hic non aperiam provident. Ipsum at modi placeat velit
                  doloribus ad odit! Dolore quaerat corporis, sed repellendus
                  veniam dicta ea.
                </Text>
                <Stack direction={"row"} mt="16px">
                  <Badge colorScheme="green">React.js</Badge>
                  <Badge colorScheme="green">Django</Badge>
                  <Badge colorScheme="green">Heroku</Badge>
                  <Badge colorScheme="green">AWS</Badge>
                  <Badge colorScheme="green">Redux</Badge>
                </Stack>
                <Stack direction={"row"} mt="16px" float={"right"}>
                  <DiGithubBadge cursor={"pointer"} size={40} opacity={0.6} />
                  <DiCode cursor={"pointer"} size={40} opacity={0.6} />
                </Stack>
              </Box>
            </Flex>
          </Box>

          <Box mt={"150px"}>
            <Flex>
              <Box
                h={"270px"}
                mt="25px"
                w={"400px"}
                mr="-50px"
                p="15px"
                boxShadow={"lg"}
                bg="white"
                zIndex={1}
                color={colorMode === "dark" && "black"}
              >
                <Text className="fontStyle" fontSize="2xl" fontWeight={"bold"}>
                  Knbrd
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  laborum hic non aperiam provident. Ipsum at modi placeat velit
                  doloribus ad odit! Dolore quaerat corporis, sed repellendus
                  veniam dicta ea.
                </Text>
                <Stack direction={"row"} mt="16px">
                  <Badge colorScheme="green">MongoDB</Badge>
                  <Badge colorScheme="green">Express.js</Badge>
                  <Badge colorScheme="green">React.js</Badge>
                  <Badge colorScheme="green">Node.js</Badge>
                </Stack>
                <Stack direction={"row"} mt="16px">
                  <DiGithubBadge cursor={"pointer"} size={40} opacity={0.6} />
                  <DiCode cursor={"pointer"} size={40} opacity={0.6} />
                </Stack>
              </Box>
              <Box zIndex={-1}>
                <Image
                  className="projects"
                  src="/background18.jpg"
                  width={600}
                  height={350}
                />
              </Box>
            </Flex>
          </Box>

          <Box mt={"150px"}>
            <Flex>
              <Image
                className="projects"
                src="/background18.jpg"
                width={600}
                height={350}
              />

              <Box
                h={"270px"}
                mt="25px"
                w={"400px"}
                ml="-50px"
                zIndex={1}
                p="15px"
                boxShadow={"lg"}
                bg="white"
                color={colorMode === "dark" && "black"}
              >
                <Text className="fontStyle" fontSize="2xl" fontWeight={"bold"}>
                  GitUser
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  laborum hic non aperiam provident. Ipsum at modi placeat velit
                  doloribus ad odit! Dolore quaerat corporis, sed repellendus
                  veniam dicta ea.
                </Text>
                <Stack direction={"row"} mt="16px">
                  <Badge colorScheme="green">Github API</Badge>
                  <Badge colorScheme="green">Next.js</Badge>
                  <Badge colorScheme="green">Chart.js</Badge>
                  <Badge colorScheme="green">Vercel</Badge>
                </Stack>

                <Stack direction={"row"} mt="16px" float={"right"}>
                  <DiGithubBadge cursor={"pointer"} size={40} opacity={0.6} />
                  <DiCode cursor={"pointer"} size={40} opacity={0.6} />
                </Stack>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Projects;
