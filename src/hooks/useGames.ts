import Game from "../interfaces/Game";
import Genre from "../interfaces/Genre";
import Platform from "../interfaces/Platform";
import useData, { FetchResponse } from "./useData";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  ); //params de query axios query
//ajouter le selected platform dans le dependency

export default useGames;
