export type AnimeId = string;

type AnimeTitle = {
  spanish: string;
  japanese: string;
};

type AnimecCategory = "Shonen" | "Terror" | "Romance";

export type Anime = {
  id: AnimeId;
  title: AnimeTitle;
  categories: AnimecCategory[];
  sinopsis: string;
  price: number;
};
