import { Anime } from "@/modules/anime/domain/Anime.entity";
import {
  IAnimeRepository,
  IGetAllAnimes,
} from "@/modules/anime/domain/Anime.repository";
import { useEffect, useState } from "react";
import { AnimesDummy } from "./AnimePage";

export const ViewAnimes = ({
  getAllAnimes,
  repository,
}: {
  getAllAnimes: IGetAllAnimes;
  repository: IAnimeRepository;
}) => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  useEffect(() => {
    getAllAnimes(repository).then((data) => setAnimes(data));
  }, []);
  return <AnimesDummy animes={animes} />;
};
