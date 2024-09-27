import React from "react";
import UseGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = UseGenres();
  return (
    <ul>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
