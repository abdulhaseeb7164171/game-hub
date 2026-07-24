import { Store } from "@tanstack/store";

export type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
};

const initialState: GameQuery = {
  genreId: undefined,
  platformId: undefined,
  sortOrder: "",
  searchText: "",
};

export const gameQueryStore = new Store<GameQuery>(initialState);
