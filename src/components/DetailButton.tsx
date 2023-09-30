
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const DetailButton = () => {
  return <View style={styles.container}><Text>Details</Text></View>;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 40,
    textAlign:'center',
    alignSelf:"center",
    zIndex: 100,
    width:100,
    height:40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 3,
   
  },
  
});

export default DetailButton;
