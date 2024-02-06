import {
  View,
  Text,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import DishCard from "../components/DishCard";
import CartIcon from "../components/CartIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant, setRestaurant } from "../store/restaurantSlice";
import { emptyCart } from "../store/cartSlice";
import { selectThemeColor } from "../store/themeSlice";
import { urlFor } from "../api/sanity";
const RestaurantScreen = () => {
  const navigation = useNavigation();
  const themeColors = useSelector(selectThemeColor);

  // const restaurant = useSelector((state) => state.restaurant);
  //   ===========>  I have made custom method
  const restaurant = useSelector(selectRestaurant);
  const { params } = useRoute();

  const dispatch = useDispatch();
  const {
    _id,
    name,
    image,
    stars,
    type,
    reviews,
    address,
    category,
    description,
    dishes,
    lng,
    lat,
  } = params;
  // console.log(params);
  useEffect(() => {
    if (restaurant && !restaurant._id) {
      //   TODO Add Dispatch empty cart
      dispatch(emptyCart());
    }
    dispatch(
      setRestaurant({
        _id,
        name,
        image,
        stars,
        type,
        reviews,
        address,
        category,
        description,
        dishes,
        lng,
        lat,
      })
    );
  }, [_id]);
  return (
    <>
      <CartIcon />
      <ScrollView>
        <View className="relative ">
          <Image
            source={{ uri: urlFor(image).url() }}
            className="w-full h-72"
          />
          <TouchableOpacity
            className="absolute top-14  left-4  bg-gray-50 rounded-full shadow p-2"
            onPress={() => navigation.goBack()}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor} />
          </TouchableOpacity>
          <View className="-mt-12 rounded-t-3xl bg-white  pt-6">
            <View className="px-4">
              <Text className="font-bold text-3xl">{name}</Text>
              {/*   Just Like in Restaurant card */}
              <View className="flex-row space-x-1 mt-2">
                <View className="flex-row items-center  space-x-1">
                  <Image
                    source={require("../assets/fullStar.png")}
                    className="w-3 h-3"
                  />
                  <Text className="text-xs">
                    <Text className="text-green-600">{stars}</Text>
                    <Text className="text-gray-700">
                      {" "}
                      · {reviews} review{" "}
                    </Text>{" "}
                    ·
                    <Text className="text-semibold text-gray-700">
                      {" "}
                      {category.name}
                    </Text>
                  </Text>
                </View>
                <View className="flex-row items-center space-x-1 ">
                  <Icon.MapPin
                    stroke={themeColors.text}
                    width={15}
                    height={15}
                  />
                  <Text className="text-gray-700 text-sm">
                    Nearby · {address}
                  </Text>
                </View>
              </View>
              {/*  next Part */}
              <Text className="text-gray-400">{description}</Text>
              <Text className="font-bold text-2xl">Menu</Text>
            </View>
            {/*  Dish Card */}
            {dishes?.map((card) => {
              return <DishCard key={card._id} {...card} />;
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
