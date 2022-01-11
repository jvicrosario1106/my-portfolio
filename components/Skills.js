import React from "react";
import { Stack, Flex, Text, Tooltip } from "@chakra-ui/react";
import {
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiGo,
  DiPython,
  DiPostgresql,
  DiMongodb,
  DiHeroku,
  DiGit,
  DiDjango,
} from "react-icons/di";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div>
      <Stack direction="row" mt="20px" mb="20px">
        <motion.div drag="x" dragConstraints={{ left: -20, right: 20 }}>
          <Tooltip label="Drag to Left or Right">
            <Flex
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
              _hover={{ cursor: "pointer" }}
            >
              <DiJsBadge size={60} />
              <DiNodejsSmall size={60} />
              <DiReact size={60} />
              <DiGo size={60} />
              <DiPython size={60} />
              <DiDjango size={60} />
              <DiPostgresql size={60} />
              <DiMongodb size={60} />
              <DiHeroku size={60} />
              <DiGit size={60} />
            </Flex>
          </Tooltip>
        </motion.div>
      </Stack>
      <Text
        textAlign="center"
        opacity="0.6"
        fontWeight="bold"
        fontSize={["lg", "lg", "2xl", "2xl"]}
        mb="20px"
      >
        Programming Languages, Frameworks and tools
      </Text>
    </div>
  );
};

export default Skills;
