import React, { useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Myself = () => {
  const animation = useAnimation();
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [inView]);

  return (
    <motion.div animate={animation}>
      <Box
        ref={ref}
        bgImage={"background18.jpg"}
        backgroundSize={"cover"}
        p={["30px", "30px", "90px", "90px"]}
        mt={["250px", "430px", "0px", "0px"]}
      >
        <Box
          borderWidth={"1px"}
          bg="white"
          color="black"
          width="100%"
          p={["40px", "60px", "60px", "60px"]}
          textAlign={"center"}
        >
          <Text
            fontSize={["1xl", "2xl", "3xl", "3xl"]}
            color="green.300"
            className="fontStyle"
          >
            About Myself
          </Text>
          <Text
            mt="20px"
            mb="20px"
            fontSize={["md", "2xl", "5xl", "5xl"]}
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

          <Button
            mt="20px"
            fontSize={["md", "2xl", "2xl", "2xl"]}
            p="28px"
            bg="green.200"
          >
            <Link href={"/resume.pdf"}>View Resume</Link>
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Myself;
