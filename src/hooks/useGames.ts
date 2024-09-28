import Game from "../interfaces/Game";
import Genre from "../interfaces/Genre";
import useData, { FetchResponse } from "./useData";

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]); //params de query axios query

export default useGames;
