import React from "react";
import UseGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

const GenreList = () => {
  const { data, isLoading, error } = UseGenres();

  if (error) return null;
  return (
    <>
      {isLoading && <Spinner />}
      <List>
        {data.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(g.image_background)}
                borderRadius={8}
              />
              <Text fontSize="lg">{g.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
