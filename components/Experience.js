import React, { useState } from "react";
import { Box, Text, Divider, Wrap, WrapItem, Center } from "@chakra-ui/react";

const Experience = () => {
  const [over, setOver] = useState(false);
  return (
    <div>
      <Box mt="120px">
        <Text fontSize={["2xl", "4xl", "6xl"]} fontWeight={"bold"}>
          Software Skills
        </Text>
        <Divider />
        <Text mt="60px" fontSize="3xl" className="fontStyle">
          Programming Languages
        </Text>
        <Wrap spacing="15px" mt="30px" className="progLang">
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
        </Wrap>

        <Text mt="60px" fontSize="3xl" className="fontStyle">
          Frameworks and Libraries
        </Text>
        <Wrap spacing="20px" mt="30px" className="progLang">
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          {/* <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="  https://raw.githubusercontent.com/gofiber/docs/master/static/fiber_v2_logo.svg"
                width={"57%"}
                style={{ padding: "28px 0px" }}
              />
            </Center>
          </WrapItem> */}
        </Wrap>

        <Text mt="60px" fontSize="3xl" className="fontStyle">
          Tools and Databases
        </Text>
        <Wrap spacing="15px" mt="30px" className="progLang">
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
        </Wrap>

        <Text mt="60px" fontSize="3xl" className="fontStyle">
          Some Technology i want to learn and explore more
        </Text>
        <Wrap spacing="15px" mt="30px" className="progLang">
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="150px" h="80px">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
                width={"60%"}
              />
            </Center>
          </WrapItem>
        </Wrap>
      </Box>
    </div>
  );
};

export default Experience;
