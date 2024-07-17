import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function BusinessListCard({ business }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push("/businessdetail" + business?.id)}
      style={{
        backgroundColor: "fff",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 15,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 150,
          borderTopLetRadius: 15,
          borderTopRightRadius: 15,
        }}
        source={{ uri: business?.imageUrl }}
      />
      <View
        style={{
          padding: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          {business?.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.GRAY,
          }}
        >
          {business?.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
