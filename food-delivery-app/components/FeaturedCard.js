import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../api/sanity";
import { useSelector } from "react-redux";
import { selectThemeColor } from "../store/themeSlice";
const FeaturedCard = ({ restaurant }) => {
  const themeColors = useSelector(selectThemeColor);
  const navigation = useNavigation();
  const { image, name, reviews, stars, category, address } = restaurant;
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("Restaurant", {
          ...restaurant,
        })
      }
    >
      <View
        className="shadow-lg bg-white rounded-3xl mr-4"
        style={{
          shadowColor: themeColors.shadowColor,
          shadowRadius: 7,
        }}
      >
        <Image
          source={{ uri: urlFor(image).url() }}
          className="w-64 h-36 rounded-t-3xl"
        />
        <View className="space-y-2 p-4 ">
          <Text>{name}</Text>
          <View className="flex-row items-center  space-x-1">
            <Image
              source={require("../assets/fullStar.png")}
              className="w-3 h-3"
            />
            <Text className="text-xs">
              <Text className="text-green-600">{stars}</Text>
              <Text className="text-gray-700"> · {reviews} </Text>
              <Text className="text-semibold text-gray-700">
                {" "}
                reviews · {category.name}
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1 ">
            <Icon.MapPin stroke={themeColors.text} width={15} height={15} />
            <Text className="text-gray-700 text-sm">Nearby · {address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FeaturedCard;
