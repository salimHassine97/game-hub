import Genre from "../interfaces/Genre";
import useData from "./useData";

const UseGenres = () => useData<Genre>("/genres");

export default UseGenres;
