import { Anime } from "../domain/Anime.entity";
import { IAnimeRepository, IGetAllAnimes } from "../domain/Anime.repository";

export const getAllAnimes: IGetAllAnimes = async (
  repository: IAnimeRepository
): Promise<Anime[]> => repository.getAll();
