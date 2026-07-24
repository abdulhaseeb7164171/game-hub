import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NavBar from "../components/NavBar";
import { ErrorPage } from "../components/error/error-page";
import { NotFoundPage } from "../components/error/not-found-page";

const RootLayout = () => (
  <>
    <NavBar />
    <Outlet />
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
