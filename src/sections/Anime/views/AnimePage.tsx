import { Anime } from "@/modules/anime/domain/Anime.entity";
import { AnimesGrid } from "../components/Animes";

export const AnimesDummy = ({ animes }: { animes: Anime[] }) => {
  return <AnimesGrid animes={animes} />;
};
