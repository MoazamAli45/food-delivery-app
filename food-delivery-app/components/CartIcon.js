import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../store/cartSlice";
import { selectThemeColor } from "../store/themeSlice";

const CartIcon = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectItems);

  const themeColors = useSelector(selectThemeColor);

  const totalAmount = useSelector(selectTotal);
  if (cartItems.length === 0) return null;

  return (
    <View className="absolute bottom-5 w-full  p-2 z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{
          backgroundColor: themeColors.bgColor,
        }}
        className="flex-row items-center justify-between p-2 rounded-full mx-4"
      >
        <View
          className="w-10 h-10 rounded-full justify-center items-center"
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
        >
          <Text className="text-white font-bold">{cartItems.length}</Text>
        </View>
        <Text className="text-white ">View Cart</Text>
        <View
          className="w-10 h-10  rounded-full items-center justify-center"
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
        >
          <Text className="text-white font-bold">$ {totalAmount}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
