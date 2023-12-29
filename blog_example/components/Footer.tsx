import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Flex align="center" justify="center" p="4" bg="blue.500">
      <Box>
        <Text>&copy; 2023 Dummy Posts</Text>
        <Link href="#" ml="2">
          Terms of Service
        </Link>
        <Link href="#" ml="2">
          Privacy Policy
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;
