import type { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string | null;
  parent_platforms: { platform: Platform }[] | null;
  metacritic: number;
  rating_top: number;
}
