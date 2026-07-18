import { List, ListItem } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
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
          <GenreItem genre={genre} onClick={() => onSelectGenre(genre)} />
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
