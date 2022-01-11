import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

const Experience = () => {
  return (
    <div>
      <Box mt="160px">
        <Text fontSize="6xl" fontWeight={"bold"}>
          Experience
        </Text>
        <Divider />
        <Box p="30px">
          <Text fontSize="3xl" className="fontStyle">
            BS in Information Technology Major in Service Management and
            Business Analytics
          </Text>
          <Text fontSize="lg" opacity="0.6">
            August 2018 - 2022
          </Text>
          <Text mt="20px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi
            saepe deleniti ut exercitationem animi optio nesciunt recusandae id
            quia ratione ea in, magni quibusdam blanditiis qui. Illo, ex iure.
            Voluptas adipisci fugiat, cumque ullam repudiandae hic corrupti
            numquam possimus ipsam quod inventore non eligendi aliquid neque
            sint doloribus sit cupiditate ut assumenda eius molestiae? Sunt
            perspiciatis voluptate vero veniam.
          </Text>
        </Box>
        <Divider />
      </Box>
    </div>
  );
};

export default Experience;
