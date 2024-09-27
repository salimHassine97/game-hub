import React from "react";
import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletonTable = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletonTable.map((s) => (
          <GameCardContainer>
            <GameCardSkeleton key={s} />
          </GameCardContainer>
        ))}
      {games.map((g) => (
        <GameCardContainer>
          <GameCard game={g} key={g.id} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
