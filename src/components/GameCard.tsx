import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import type Game from "../entities/Game";
import getCroppedImageURL from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform) ?? []}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={`/game/$slug`} params={{ slug: game.slug }}>
            {game.name} <Emoji rating={game.rating_top} />
          </Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
