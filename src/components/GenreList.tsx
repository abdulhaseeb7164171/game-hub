import { Heading, List, ListItem } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

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
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <GenreItem
              genre={genre}
              isSelected={genre.id === selectedGenreId}
              onClick={() => onSelectGenre(genre)}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
