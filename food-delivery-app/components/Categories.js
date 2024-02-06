import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getCategories } from "../api/api";
import { urlFor } from "../api/sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    //   GETTING DATA FROM SANITY
    getCategories().then((data) => {
      // console.log(data, "Categories");
      setCategories(data);
    });
  }, []);

  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View className="mt-4 ml-2">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className=" overflow-visible"
      >
        {categories.map((category, index) => {
          let isActive = activeCategory === category._id;
          let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          let textClass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";
          return (
            <View
              key={index}
              className="flex items-center justify-center mr-6 "
            >
              <TouchableOpacity
                className={`shadow p-1 rounded-full ${btnClass}`}
                onPress={() => setActiveCategory(category._id)}
              >
                <Image
                  source={{ uri: urlFor(category.image).url() }}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
              <Text className={`text-sm ${textClass}`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
