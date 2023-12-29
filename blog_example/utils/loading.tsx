// Import necessary dependencies
import { Spinner } from "@chakra-ui/react";
import React from "react";

// LoadingIndicator component
const LoadingIndicator: React.FC = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="lg"
    />
  );
};

export default LoadingIndicator;
