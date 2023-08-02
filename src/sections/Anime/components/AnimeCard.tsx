import { Anime } from "@/modules/anime/domain/Anime.entity";

export const AnimeCard = ({ anime }: { anime: Anime }) => {
  return (
    <div>
      <p>{anime.title.spanish}</p>
      <p>{anime.sinopsis}</p>
      <p>{anime.price}</p>
      <button onClick={() => console.log(`comprar ${anime.id}`)}>buy</button>
    </div>
  );
};
