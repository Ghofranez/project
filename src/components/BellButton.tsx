import React from "react";
import { View, Image, StyleSheet, Alert, TouchableOpacity } from "react-native";

const BellButton = () => {
  const handleButtonPress = () => {
    console.log("Image cliquée !");
    Alert.alert("Simple button");
  };

  return (
    <TouchableOpacity
      onPress={handleButtonPress}
    >
      <Image source={require("../../assets/bell.png")} style={styles.bell} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bell: {
    width: 30,
    height: 30,
    backgroundColor:"white",
    borderRadius:20,
    
  },
});

export default BellButton;
