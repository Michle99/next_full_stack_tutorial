import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const Header: React.FC = () => {
  return (
    <Flex align="center" justify="space-between" p="4" bg="blue.500" color="white">
      <Link href="/" textDecoration="none">
        <Text fontSize="xl" fontWeight="bold">
          Dummy Posts
        </Text>
      </Link>
      <Spacer />
      <Box>
        <Link href="#" mr="4">
          About
        </Link>
        <Link href="#">Contact</Link>
      </Box>
    </Flex>
  );
};

export default Header;
