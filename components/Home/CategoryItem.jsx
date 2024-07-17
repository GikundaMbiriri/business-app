import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoryItem({ category, onCategoryPress }) {
  return (
    <TouchableOpacity onPress={(category) => onCategoryPress(category)}>
      <View style={{ padding: 10, borderRadius: 99, marginRight: 15 }}>
        <Image
          source={{ uri: category.icon }}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "outfit-medium",
          textAlign: "center",
        }}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
