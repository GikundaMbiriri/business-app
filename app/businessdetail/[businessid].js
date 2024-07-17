import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { collection, query, getDoc, where, doc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { Colors } from "../../constants/Colors";
import Intro from "../../components/BusinessDetail/Intro";
import ActionButton from "../../components/BusinessDetail/ActionButton";
import About from "../../components/BusinessDetail/About";
import Reviews from "../../components/BusinessDetail/Reviews";
export default function BusinessDetail() {
  const { businessid } = useLocalSearchParams();
  const [business, setBusiness] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GetBusinessDetailById();
  }, []);
  const GetBusinessDetailById = async () => {
    setLoading(true);
    const docRef = doc(db, "BusinessList", businessid);
    const docSnap = await getDoc(docRef);
    setLoading(false);
    if (docSnap.exists()) {
      setBusiness({ id: docSnap.id, ...docSnap.data() });
    }
  };

  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator
          style={{
            marginTop: "70%",
          }}
          size={"large"}
          color={Colors.PRIMARY}
        />
      ) : (
        <View>
          <Intro business={business} />
          <ActionButton business={business} />
          <About business={business} />

          <Reviews business={business} />
        </View>
      )}
    </ScrollView>
  );
}
