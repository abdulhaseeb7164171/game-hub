import { HStack, Image, Button } from "@chakra-ui/react";
import type { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
  genre: Genre;
  onClick: () => void;
}

const GenreItem = ({ genre, onClick }: Props) => {
  return (
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        src={getCroppedImageURL(genre.image_background)}
        alt={genre.name}
      />
      <Button onClick={onClick} fontSize="lg" variant="link">
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreItem;
