import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { getFeaturedRestaurants } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { pallete } from "../theme";
import {
  changeColor,
  selectThemeColor,
  selectThemeIndex,
} from "../store/themeSlice";

const HomeScreen = () => {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);
  const themeColors = useSelector(selectThemeColor);
  const themeIndex = useSelector(selectThemeIndex);

  const dispatch = useDispatch();

  useEffect(() => {
    getFeaturedRestaurants().then((data) => {
      setFeaturedRestaurants(data);
    });
  }, []);

  //    ==================>  Change THEME  Color
  const handleViewClick = () => {
    // Calculate the index of the next color in the palette
    const nextIndex = (themeIndex + 1) % pallete.length;
    // Dispatch action to change the color
    dispatch(changeColor({ theme: pallete[nextIndex], index: nextIndex }));
  };

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        {/*   Search Bar ==============> */}
        <View className="flex-row items-center justify-center space-x-2 px-4 pb-2">
          {/*  Left search bar */}
          <View className="flex-1 flex-row items-center p-3  border-gray-300 border  rounded-full space-x-1">
            <Icon.Search width="24" height={"24"} stroke={"gray"} />
            <TextInput
              className="flex-1 ml-2 text-sm outline-none"
              placeholder="Search"
              keyboardType="default"
            />
            <View className="flex-1 space-x-1  border-l-gray-300 border-l pl-2 flex-row items-center">
              <Icon.MapPin width="20" height={"20"} stroke={"gray"} />
              <Text className="text-gray-600 text-xs"> New York, NYC</Text>
            </View>
          </View>
          <TouchableOpacity
            className="p-3 rounded-full"
            style={{
              backgroundColor: themeColors.bgColor,
            }}
            onPress={handleViewClick}
          >
            <Icon.Sliders width="20" height={"20"} stroke={"gray"} />
          </TouchableOpacity>
        </View>
        {/*  Categories */}
        <Categories />
        {/*   FEATURED ROW */}
        {featuredRestaurants.map((feature, index) => {
          return <FeaturedRow key={index} feature={feature} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
