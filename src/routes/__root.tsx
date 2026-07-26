import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NavBar from "../components/NavBar";
import { ErrorPage } from "../components/error/error-page";
import { NotFoundPage } from "../components/error/not-found-page";
import { Box } from "@chakra-ui/react";

const RootLayout = () => (
  <>
    <NavBar />
    <Box padding={5}>
      <Outlet />
    </Box>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({
  component: RootLayout,
  errorComponent: ({ error, reset }) => (
    <ErrorPage error={error as Error} onRetry={reset} />
  ),
  notFoundComponent: () => NotFoundPage(),
});
