import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectItems,
  selectItemsById,
} from "../store/cartSlice";
import { urlFor } from "../api/sanity";
import { selectThemeColor } from "../store/themeSlice";

const DishCard = ({ name, description, price, image, _id }) => {
  const themeColors = useSelector(selectThemeColor);
  const dispatch = useDispatch();
  //  cartItems is an array of items in the cart of specific matching id
  const cartItems = useSelector((state) => selectItemsById(state, _id));

  const addToCartHandler = () => {
    dispatch(addToCart({ _id, name, price, image, description }));
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart({ _id }));
  };
  return (
    <View
      className="bg-white rounded-3xl pb-3 pr-3 flex-row items-center gap-2  shadow-sm  mx-3 my-2"
      style={{
        shadowColor: themeColors.shadowColor,
        shadowRadius: 7,
      }}
    >
      <Image
        source={{ uri: urlFor(image).url() }}
        className="  rounded-3xl"
        style={{ width: 100, height: 100 }}
      />
      <View className="flex-1">
        <Text className="text-lg font-semibold">{name}</Text>
        <Text className="text-gray-400">{description}</Text>
        <View className="flex-row justify-between mt-2 ">
          <Text className="mt-1 font-semibold">$ {price}</Text>
          <View className="flex-row items-center ">
            <TouchableOpacity
              className=" p-1 rounded-full"
              style={{
                backgroundColor: themeColors.bgColor,
              }}
              onPress={addToCartHandler}
            >
              <Icon.Plus stroke={"white"} width={15} height={15} />
            </TouchableOpacity>
            <Text className=" px-2">{cartItems.length}</Text>
            <TouchableOpacity
              className=" p-1 rounded-full"
              style={{
                backgroundColor: themeColors.bgColor,
              }}
              onPress={removeFromCartHandler}
              disabled={cartItems.length === 0}
            >
              <Icon.Minus stroke={"white"} width={15} height={15} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishCard;
