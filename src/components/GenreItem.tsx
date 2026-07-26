import { HStack, Image, Button } from "@chakra-ui/react";
import type { Genre } from "../entities/Genre";
import getCroppedImageURL from "../services/image-url";
import { useSelector } from "@tanstack/react-store";
import { gameQueryStore } from "../store";
import { gameQueryActions } from "../store.actions";

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  const selectedGenreId = useSelector(gameQueryStore, (s) => s.genreId);
  return (
    <HStack>
      <Image
        boxSize="32px"
        objectFit="cover"
        borderRadius={8}
        src={getCroppedImageURL(genre.image_background)}
        alt={genre.name}
      />
      <Button
        whiteSpace="normal"
        textAlign="left"
        onClick={() => gameQueryActions.setGenreId(genre.id)}
        fontSize="lg"
        variant="link"
        fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
      >
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreItem;
