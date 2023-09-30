import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import GoBackButton from "../components/GoBackButton/GoBackButton";
import LikeButton from "../components/LikeButton";
import DetailButton from "../components/DetailButton";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ReservationBarre from "../components/ReservationBarre";
import ImageList from "../components/ImageList"
const DetailScreen = ({route}) => {
  console.log(route.params)
  const item = route.params.item
  return (
    <SafeAreaView style={styles.container}>
      <GoBackButton />
      <LikeButton />
      <DetailButton />
      <ScrollView style={{height:"80%"}}>
        <View style={styles.imageContainer}>
         <ImageList />
        </View>
        <View style={styles.view}>
          <Text style={styles.titre}>{item.name}</Text>
          <View style={styles.text}>
            <Image
              style={styles.imagelocation}
              source={require("../../assets/location.png")}
            />
            <Text style={styles.location}> Bitung, Sulawesi Utara </Text>
          </View>
          <View style={styles.text}>
            <Image
              style={styles.imagelocation}
              source={require("../../assets/profile.png")}
            />
            <Text style={styles.location}> James Warren </Text>
          </View>
          <View style={styles.description}>
            <Ionicons name="bed-outline" size={15} color="brown" />
            <Text style={styles.caractere}> 4 Bedroom</Text>

            <MaterialCommunityIcons
              name="bathtub-outline"
              size={15}
              color="brown"
            />
            <Text style={styles.caractere}> 3 Bathroom</Text>

            <Entypo name="layers" size={15} color="brown" />
            <Text style={styles.caractere}> 1.805 Sqft</Text>
          </View>
          <View>
            <Text style={styles.paragraph}>
              Warm and Cozy Old Vintage House in Bitung , Sulawesi Utara with
              the most Affordable price. Perfect for Small Or big family to live
              in,this house close to near supermarket, Mall, Public Facilities ,
              Transportation and Police Station, This house was design by world
              class architect and was built with the best construction.
            </Text>
          </View>
          
        </View>
      </ScrollView>
            <ReservationBarre/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  view: {
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center", // Pour aligner l'image en haut.
  
  },
  image: {
    width: "100%",
    height: 300, // Ajustez la hauteur selon vos besoins.
    resizeMode: "cover",
  },
  text: {
    left: 20,
    flexDirection: "row",
  },
  titre: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 10,
    left: 9,
  },
  imagelocation: {
    width: 10,
    height: 15,
  },
  location: {
    fontSize: 8,
  },
  description: {
    top: 15,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#fff8dc",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  caractere: {
    fontSize: 10,
    padding:4,
  },
  paragraph:{
    padding:10,
    top:20,
    fontSize:10,
    fontStyle:"normal",
    color:'grey',
  },
});

export default DetailScreen;
