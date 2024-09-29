import Game from "../interfaces/Game";
import GameQuery from "../interfaces/GameQuery";
import Genre from "../interfaces/Genre";
import Platform from "../interfaces/Platform";
import useData, { FetchResponse } from "./useData";

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  ); //params de query axios query
//ajouter le selected platform dans le dependency

export default useGames;
