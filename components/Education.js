import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

const Education = () => {
  return (
    <div>
      <Box mt="110px">
        <Text fontSize="6xl" fontWeight={"bold"}>
          Education
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
            I&apos;m 4th year student of FEU Institute of Technology pursuing
            BSIT-SMBA. Currently, we are in our 2nd semester of this year and
            next semester is our Internship Program
          </Text>
          <Text mt="20px">
            <Text fontSize="lg" mb="10px" className="fontStyle">
              Courses/Subjects:
            </Text>
            Computer Programming 1 and 2, Interface Designs, Data Structure and
            Algorithm, Advance Web Design and Client side Scripting, Design
            Thinking, Human Computer Interaction, App Dev and Emerging
            Technologies, System Integration and Architecture,Web System
            Technologies, Business Analytics, Database Systems, Enterprise Data
            Management, Analytics Modeling, Analytical tools and
            techniques,Analytics Application
          </Text>
        </Box>
        <Divider />
      </Box>
    </div>
  );
};

export default Education;
