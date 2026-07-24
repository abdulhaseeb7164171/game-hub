import {
  Box,
  Button,
  Code,
  Container,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "@tanstack/react-router";
import { FiAlertTriangle, FiHome, FiRefreshCw } from "react-icons/fi";

interface ErrorPageProps {
  error: Error;
  onRetry?: () => void;
}

export function ErrorPage({ error, onRetry }: ErrorPageProps) {
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
          <Icon as={FiAlertTriangle} boxSize={12} color="red.500" />

          <Heading size="lg">Something went wrong</Heading>

          <Text color="gray.500">
            An unexpected error occurred while loading this page.
          </Text>

          <Code w="full" p={3} borderRadius="md" whiteSpace="pre-wrap">
            {error.message || "Unknown error"}
          </Code>

          <HStack spacing={3}>
            {onRetry && (
              <Button
                leftIcon={<FiRefreshCw />}
                colorScheme="blue"
                onClick={onRetry}
              >
                Try Again
              </Button>
            )}

            <Button
              as={RouterLink}
              to="/"
              variant="outline"
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
