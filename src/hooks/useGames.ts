import Game from "../interfaces/Game";
import useData, { FetchResponse } from "./useData";

const useGames = () => useData<Game>("/games");

export default useGames;
