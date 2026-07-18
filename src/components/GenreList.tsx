import { List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreItem from "./GenreItem";
import GenreItemSkeleton from "./GenreItemSkeleton";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <List>
      {isLoading &&
        [...Array(10)].map((_, i) => (
          <ListItem key={i} paddingY="5px">
            <GenreItemSkeleton />
          </ListItem>
        ))}
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <GenreItem genre={genre} />
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
