import Game from "./Game";

export default interface ResponseFetchGames {
  count: number;
  results: Game[];
}
