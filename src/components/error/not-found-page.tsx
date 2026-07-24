import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "@tanstack/react-router";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export function NotFoundPage() {
  return (
    <Container
      maxW="container.md"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={10}
    >
      <Box w="full" borderWidth="1px" borderRadius="xl" p={8} shadow="lg">
        <Stack spacing={6} align="center" textAlign="center">
          <Heading size="4xl">404</Heading>

          <Heading size="lg">Page not found</Heading>

          <Text color="gray.500">
            The page you're looking for doesn't exist or may have been moved.
          </Text>

          <HStack spacing={3}>
            <Button
              variant="outline"
              leftIcon={<FiArrowLeft />}
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>

            <Button
              as={RouterLink}
              to="/"
              colorScheme="blue"
              leftIcon={<FiHome />}
            >
              Home
            </Button>
          </HStack>
        </Stack>
      </Box>
    </Container>
  );
}
