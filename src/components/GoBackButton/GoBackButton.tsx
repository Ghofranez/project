import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Button,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const GoBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (navigation.canGoBack()) navigation.goBack();
      }}
    >
      <Image style={styles.logo} source={require("../../../assets/OIP.png")} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 40,
    left: 10,
    zIndex: 100,
    width: 50,
    height: 50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "white",
    borderRadius: 25,
    elevation:3,
    //justifyContent: "center",
    // alignItems: "center",
  },
  logo: {
    width: 30, // Ajustez la largeur et la hauteur selon vos besoins
    height: 25,
    position: "relative",
  },
});

export default GoBackButton;
