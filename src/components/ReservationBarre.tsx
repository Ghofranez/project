import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const ReservationBarre = () => {
  const handleViewAllClick = () => {
    // Logique pour gérer le clic sur "View All"
    console.log("Bouton 'Reserver' cliqué");
  };
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Price</Text>
        <View style={styles.price}>
          <Text style={{ color: "brown", fontWeight: "bold" }}>$10.000</Text>
          <Text style={{ color: "grey" }}>/night</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleViewAllClick}>
          <Text style={styles.buttonText}>Reserver Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    //alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,

  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    position: "relative",
    textAlign: "center",
    fontSize: 10,
   
    padding: 17,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "black",
  },
  text: {
    fontSize: 10,
    color: "grey",
  },
  view: {
    //padding: 5,
    flexDirection: "column",
  },
  price: {
    flexDirection: "row",
  },
});
export default ReservationBarre;
