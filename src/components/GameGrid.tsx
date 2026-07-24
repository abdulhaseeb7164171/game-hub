import { SimpleGrid, Text, Button, Box, Spinner } from "@chakra-ui/react";
import React from "react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { 
    data, 
    error, 
    isLoading, 
    isFetchingNextPage, 
    fetchNextPage, 
    hasNextPage 
  } = useGames(gameQuery);

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="10px">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        marginBottom={5}
      >
        {isLoading &&
          [...Array(6)].map((_, index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      
      {hasNextPage && (
        <Box display="flex" justifyContent="center">
          <Button 
            onClick={() => fetchNextPage()} 
            disabled={isFetchingNextPage}
            marginY={5}
          >
            {isFetchingNextPage ? <Spinner /> : "Load More"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default GameGrid;
