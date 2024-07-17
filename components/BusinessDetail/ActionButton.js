import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
  Share,
} from "react-native";

export default function ActionButton({ business }) {
  const actionButtonMenu = [
    {
      id: 1,
      name: "Call",
      icon: require("../../assets/images/call.png"),
      url: "tel:" + business?.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: require("../../assets/images/location.png"),
      url: "tel:" + business?.contact,
    },
    {
      id: 3,
      name: "Web",
      icon: require("../../assets/images/web.png"),
      url: business?.website,
    },
    {
      id: 4,
      name: "Share",
      icon: require("../../assets/images/share.png"),
      url: business?.website,
    },
  ];
  const OnPressHandler = (item) => {
    if (item.name == "Share") {
      return Share.share({
        message:
          business?.name +
          "\n Address:" +
          business.address +
          "\n Find more details on bisiness directory App by MG!",
      });
    }
    Linking.openURL(item.url);
  };
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <FlatList
        data={actionButtonMenu}
        numColumns={4}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        scrollEnabled={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} onPress={() => OnPressHandler(item)}>
            <Image
              source={item?.icon}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                fontFamily: "outfit-medium",
                textAlign: "center",
                marginTop: 3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
