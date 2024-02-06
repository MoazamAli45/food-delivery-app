import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliverOrder");
    }, 3000);
  }, []);
  return (
    <SafeAreaView>
      <View className=" w-full h-full  items-center justify-center bg-white ">
        <Image
          source={require("../assets/delivery.gif")}
          className="w-80 h-80 "
        />
      </View>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
