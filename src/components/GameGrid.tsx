import React from "react";
import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {games.map((g) => (
        <GameCard game={g} key={g.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
