import { HStack, Image, Text } from "@chakra-ui/react";
import type { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  return (
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        src={getCroppedImageURL(genre.image_background)}
        alt={genre.name}
      />
      <Text fontSize="lg">{genre.name}</Text>
    </HStack>
  );
};

export default GenreItem;
