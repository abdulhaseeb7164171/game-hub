import { createFileRoute, notFound } from "@tanstack/react-router";

import useGame from "../../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../../components/ExpandableText";

export const Route = createFileRoute("/game/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();

  const { data: game, isLoading, error } = useGame(slug);

  if (isLoading) return <Spinner />;
  if (!game) throw notFound();
  if (error) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText children={game.description_raw} />
    </>
  );
}
