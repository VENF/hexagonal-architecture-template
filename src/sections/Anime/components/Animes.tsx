import { Anime } from "@/modules/anime/domain/Anime.entity";
import { AnimeCard } from "./AnimeCard";

export const AnimesGrid = ({ animes }: { animes: Anime[] }) => {
  return (
    <div>
      {animes.map((anime: Anime) => (
        <AnimeCard anime={anime} key={anime.id} />
      ))}
    </div>
  );
};
