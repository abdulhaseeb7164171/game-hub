import { Heading, List, ListItem } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          [...Array(10)].map((_, i) => (
            <ListItem key={i} paddingY="5px">
              <GenreItemSkeleton />
            </ListItem>
          ))}
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <GenreItem
              genre={genre}
              isSelected={genre.id === selectedGenre?.id}
              onClick={() => onSelectGenre(genre)}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
