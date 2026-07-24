import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/game/$gameId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { gameId } = Route.useParams();
  return <div>Hello "/game/{gameId}"!</div>;
}
