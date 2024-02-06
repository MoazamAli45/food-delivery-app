import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import FeaturedCard from "./FeaturedCard";
import { useSelector } from "react-redux";
import { selectThemeColor } from "../store/themeSlice";

const FeaturedRow = ({ feature }) => {
  const themeColors = useSelector(selectThemeColor);
  const { name, description, restaurants } = feature;
  return (
    <View className="mt-4 mx-4">
      <View className="flex-row justify-between items-center ">
        <View>
          <Text className="text-lg font-semibold">{name}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text
            className="font-semibold "
            style={{
              color: themeColors.text,
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      {/*   FOR CARDS */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 5, paddingVertical: 10 }}
      >
        {restaurants.map((item, i) => (
          <FeaturedCard key={i} restaurant={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
