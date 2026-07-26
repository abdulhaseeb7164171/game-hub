import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { type FetchResponse } from "../services/api-client";
import ms from "ms";
import { useSelector } from "@tanstack/react-store";
import { gameQueryStore } from "../store";
import type { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useSelector(gameQueryStore, (s) => s);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: ms("24h"), // 24 hours
  });
};

export default useGames;
