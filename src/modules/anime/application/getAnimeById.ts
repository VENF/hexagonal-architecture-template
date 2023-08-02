import { AnimeId, Anime} from "../domain/Anime.entity";
import { IGetAnimeById ,IAnimeRepository} from "../domain/Anime.repository";

export const getAnimeById: IGetAnimeById = async (
  id: AnimeId,
  repository: IAnimeRepository
): Promise<Anime> => repository.getById(id);
