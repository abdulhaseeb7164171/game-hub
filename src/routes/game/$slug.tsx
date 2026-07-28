import { createFileRoute, notFound } from "@tanstack/react-router";

import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../../components/ExpandableText";
import GameAttributes from "../../components/GameAttributes";
import useGame from "../../hooks/useGame";
import GameTrailer from "../../components/GameTrailer";
import GameScreenshots from "../../components/GameScreenshots";

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
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
}
