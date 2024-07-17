import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "../../constants/Colors";
import { db } from "../../config/firebaseConfig";
import { collection, getDocs, limit, query } from "firebase/firestore";
import PopularBusinessCard from "./PopularBusinessCard";

export default function PopularBusiness() {
  const [businesses, setBusinesses] = useState([]);
  useEffect(() => {
    GetBusinessList();
  }, []);
  const GetBusinessList = async () => {
    setBusinesses([]);
    const q = query(collection(db, "BusinessList"), limit(10));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusinesses((prev) => [...prev, { id: doc.id, ...doc.data() }]);
    });
  };
  return (
    <View>
      <View
        style={{
          paddingLeft: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            marginTop: 10,
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          Popular Business
        </Text>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: "outfit-medium",
          }}
        >
          View All
        </Text>
      </View>
      <FlatList
        data={businesses}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index }) => (
          <PopularBusinessCard key={index} business={item} />
        )}
      />
    </View>
  );
}
