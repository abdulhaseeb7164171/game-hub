import { gameQueryStore } from "./store";

export const gameQueryActions = {
  setSearchText: (searchText: string) =>
    gameQueryStore.setState((state) => ({
      ...state,
      searchText,
    })),
  setSortOrder: (sortOrder: string) =>
    gameQueryStore.setState((state) => ({
      ...state,
      sortOrder,
    })),
  setGenreId: (genreId?: number) =>
    gameQueryStore.setState((state) => ({
      ...state,
      genreId,
    })),

  setPlatformId: (platformId?: number) =>
    gameQueryStore.setState((state) => ({
      ...state,
      platformId,
    })),
};
