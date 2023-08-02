import { Anime, AnimeId } from "./Anime.entity";

export interface IAnimeRepository {
  getById: (id: AnimeId) => Promise<Anime>;
  getAll: () => Promise<Anime[]>
}

export interface IGetAnimeById {
  (id: AnimeId, repository: IAnimeRepository): Promise<Anime>;
}

export interface IGetAllAnimes {
  (repository: IAnimeRepository): Promise<Anime[]>
}