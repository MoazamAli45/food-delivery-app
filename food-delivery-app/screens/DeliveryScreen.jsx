import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../store/restaurantSlice";
import { emptyCart } from "../store/cartSlice";
import { selectThemeColor } from "../store/themeSlice";

const DeliveryScreen = () => {
  const phoneNumber = "03024339972";
  const dispatch = useDispatch();
  const data = useSelector(selectRestaurant);

  const themeColors = useSelector(selectThemeColor);

  console.log(data, data.lat, "Restaurant Delivery");
  const navigation = useNavigation();
  const handleCancel = () => {
    dispatch(emptyCart());
    navigation.goBack();
  };

  const handlePhonePress = () => {
    const phoneUrl = `tel:${phoneNumber}`;

    Linking.canOpenURL(phoneUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneUrl);
        } else {
          console.error("Cannot open phone dialer");
        }
      })
      .catch((error) => console.error("Error opening phone dialer", error));
  };
  return (
    <SafeAreaView>
      <View className="w-full h-full">
        <MapView
          initialRegion={{
            latitude: data.lat,
            longitude: data.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          className=" flex-1 "
          mapType="standard"
        >
          <Marker
            coordinate={{ latitude: data.lat, longitude: data.lng }}
            title={data.name}
            description={data.description}
            pinColor={themeColors.bgColor}
          />
        </MapView>
        <View className="rounded-t-3xl -mt-12 bg-white relative z-10">
          <TouchableOpacity className="absolute right-4 top-2"></TouchableOpacity>
          <View className="flex-row justify-between px-5 pt-10">
            <View>
              <Text className="text-lg text-gray-700 font-semibold">
                Estimated Arrival
              </Text>
              <Text className="text-3xl font-extrabold text-gray-700">
                20-30 Minutes
              </Text>
              <Text className="mt-2 text-gray-700 font-semibold">
                Your Order is own its way
              </Text>
            </View>
            <Image
              className="h-24 w-24"
              source={require("../assets/bikeGuy2.gif")}
            />
          </View>

          <View
            style={{ backgroundColor: themeColors.lowBgColor }}
            className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
          >
            <View
              style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
              className="p-1 rounded-full"
            >
              <Image
                style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
                className="w-16 h-16 rounded-full object-center"
                source={require("../assets/profile.jpeg")}
              />
            </View>

            <View className="flex-1 ml-3">
              <Text className="text-lg font-bold text-white">Syed Moazam</Text>
              <Text className="text-white font-semibold">Your Rider</Text>
            </View>
            <View className="flex-row items-center space-x-3 mr-3">
              <TouchableOpacity className="bg-white p-2 rounded-full">
                <Icon.Phone
                  fill={themeColors.bgColor}
                  stroke={themeColors.bgColor}
                  strokeWidth="1"
                  onPress={handlePhonePress}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleCancel}
                className="bg-white p-2 rounded-full"
              >
                <Icon.X stroke={"red"} strokeWidth="5" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryScreen;
