import React, {useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { SafeArea } from "../../Elements/safe-area.component";
import { Spacer } from "../../Elements/spacer.component";
import { PictureCard } from "../components/picturecard";
import { PictureContext } from "../../services/pictures.context";
import { Text } from "../../Elements/text.component";

const PictureList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16,
    },
  })``;

export const PictureScreen = () =>{
    const {pictures} = useContext(PictureContext);

    return(
        <SafeArea>
        <PictureList
          data={
            pictures
          }
          renderItem={({ item }) => {

            return (
              <TouchableOpacity onPress={() => navigation.navigate("PostDetail", { post: item, }) }>
                <Spacer position="bottom" size="large">
                  <PictureCard item={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    );

}