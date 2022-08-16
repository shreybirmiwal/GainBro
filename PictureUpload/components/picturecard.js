import React from "react";
import { View } from "react-native";
import { Text } from "../../Elements/text.component";
import { PicCard, PictureCardCover, Info } from "./picturecard.styles";

export const PictureCard = ({item}) => {
    console.log(item);

    return(
        <PicCard elevation={5}>
            <View>
                <PictureCardCover key={item.username} source={{ uri: item.image }} />
            </View>
            <Info>
                <Text variant="label">{item.username}</Text>
                <Text variant="label">Likes: {item.likes}</Text>
                <Text variant="label">Started {item.start}</Text>
                <Text variant="label">Day {item.day}</Text>

            </Info>
        </PicCard>
    );

};