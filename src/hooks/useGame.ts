import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import type Game from "../entities/Game";
import ms from "ms";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("1h"),
  });

export default useGame;
