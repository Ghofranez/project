import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  FlatList,
  Pressable,
} from "react-native";
import { ProfileScreenNavigationProp } from "../navigation/root.navigation";

const Galerie = ({ list }) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <ScrollView style={styles.container} horizontal={true}>
      <FlatList
        horizontal
        data={list}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("DetailScreen", { item: item });
              }}
              style={styles.imageContainer}
            >
              <Image source={item.image} style={styles.image1} />
              <View
                style={{
                  alignItems: "flex-start",
                  paddingTop: 5,
                }}
              >
                <Text style={styles.text}>{item.name}</Text>

                <View style={styles.view}>
                  <Text style={styles.priceText}>${item.price}</Text>
                  <Text style={styles.nightText}>/night</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/location.png")}
                  />
                  <Text style={styles.locationText}>{item.location}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/images.png")}
                  />
                  <Text style={styles.locationText}>{item.lo}</Text>
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  imageContainer: {
    marginRight: 10, // Espacement entre les images et le texte
    justifyContent: "center",
    alignItems: "center",
  },
  image1: {
    width: 200,
    height: 200,
    borderRadius: 5,
    marginLeft: 10,
  },

  image: {
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  imageText: {
    textAlign: "center",
    marginTop: 10, // Espacement entre l'image et le texte
  },
  priceText: {
    color: "brown", // Couleur bleue pour "$5000"
    fontWeight: "bold", // Texte en gras pour "$5000" (si nécessaire)
  },
  nightText: {
    color: "grey",
  },
  locationText: {
    fontSize: 12,
    fontFamily: "normal",
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "flex-start",
  },
  view: {
    flexDirection: "row",
  },
});

export default Galerie;
