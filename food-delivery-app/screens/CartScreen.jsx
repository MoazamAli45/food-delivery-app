import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { featured } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../store/restaurantSlice";
import { removeFromCart, selectItems, selectTotal } from "../store/cartSlice";
import { selectThemeColor } from "../store/themeSlice";
const CartScreen = () => {
  const navigation = useNavigation();
  const data = useSelector(selectRestaurant);
  const dispatch = useDispatch();

  const themeColors = useSelector(selectThemeColor);

  //    GROUPING ITEMS BY CART ITEMS and _id
  const [groupItems, setGroupItems] = useState([]);
  const cartItems = useSelector(selectItems);
  const totalAmount = useSelector(selectTotal);

  const deliveryFee = 2;

  useEffect(() => {
    const grouped = cartItems.reduce((prev, curr) => {
      if (prev[curr._id]) {
        //  if already exists
        prev[curr._id].push(curr);
      } else {
        // if not
        prev[curr._id] = [curr];
      }
      return prev;
    }, {});
    setGroupItems(grouped);
  }, [cartItems]);

  //    =============> Group items will be object to loop through objects you have to use Object.entries
  //  return first key and then value
  console.log(Object.entries(groupItems));
  return (
    <SafeAreaView className="relative justify-between flex-1">
      <View className=" flex-row  justify-center mt-1">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-3  left-4   rounded-full shadow p-2"
          style={{
            backgroundColor: themeColors.bgColor,
          }}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
        </TouchableOpacity>
        <View>
          <Text className="font-bold text-2xl">Your Cart</Text>
          <Text className="text-gray-400">{data?.name}</Text>
        </View>
      </View>
      {/*   BikeGuy */}
      <View
        className="flex-row justify-between px-3 mt-2 items-center"
        style={{
          backgroundColor: themeColors.lowBgColor,
        }}
      >
        <Image
          source={require("../assets/bikeGuy.png")}
          className="w-20 h-20"
        />
        <Text>Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text
            className="font-bold text-md"
            style={{
              color: themeColors.text,
            }}
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="mt-3">
        {/*  Cart Items Card */}
        {Object.entries(groupItems).map(([index, items]) => {
          return (
            <View
              className="flex-row justify-between shadow-lg rounded-3xl bg-white space-x-2 px-3 py-4 mx-2 my-1"
              key={index}
            >
              <View className="flex-row gap-2 items-center">
                <Text
                  style={{
                    color: themeColors.text,
                  }}
                  className="font-bold"
                >
                  {items.length}x
                </Text>
                <Image
                  source={require("../assets/dishes/dish1.jpeg")}
                  className="h-14 w-14 rounded-full "
                />
                <Text>{items[0].name}</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Text className="font-bold">$ {items[0].price} </Text>
                <TouchableOpacity
                  className=" p-1 rounded-full"
                  style={{
                    backgroundColor: themeColors.bgColor,
                  }}
                  onPress={() =>
                    dispatch(removeFromCart({ _id: items[0]._id }))
                  }
                >
                  <Icon.Minus stroke={"white"} width={15} height={15} />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
      {/*  Bottom */}
      <View
        style={{
          backgroundColor: themeColors.lowBgColor,
        }}
        className="py-5 rounded-t-3xl space-y-3 px-4 "
      >
        <View className="flex-row justify-between ">
          <Text>Subtotal</Text>
          <Text>$ {totalAmount}</Text>
        </View>
        <View className="flex-row justify-between ">
          <Text>Delivery</Text>
          <Text>$ 2</Text>
        </View>
        <View className="flex-row justify-between ">
          <Text className="font-bold">Order Total</Text>
          <Text className="font-bold">
            $ {totalAmount !== 0 ? totalAmount + deliveryFee : 0}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: themeColors.bgColor,
          }}
          className="rounded-full p-2    "
          onPress={() => navigation.navigate("PreparingOrder")}
        >
          <Text className="font-bold text-lg text-center text-white ">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
