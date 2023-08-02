import axios from "axios";
import { AnimeId, Anime } from "../domain/Anime.entity";
import { IAnimeRepository } from "../domain/Anime.repository";

export const apiAnimeRepository = (): IAnimeRepository => {
  return {
    getById,
    getAll
  };
};

const getById = async (id: AnimeId): Promise<Anime> => {
  const { data: response } = await axios.get<Anime>(`/anime/${id}`, {
    headers: {
      Accept: "application/json",
    },
  });
  return response;
};

const getAll = async (): Promise<Anime[]> => {
  const { data: response } = await axios.get<Anime[]>(`/animes`, {
    headers: {
      Accept: "application/json",
    },
  });
  return response;
};
