import React from "react";
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Pressable,
} from "react-native";
import BellButton from "../components/BellButton";
import SearchBar from "../components/SearchBar";
import Galerie from "../components/Galerie";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation()
  const handleViewAllClick = () => {
    // Logique pour gérer le clic sur "View All"
    console.log("Bouton 'View All' cliqué");
  };

  const data = [
    {
      image: require("../../assets/page2.png"),
      name: "Bitung Resort",
      price: 5000,
      description: "night",
      location: "Bitung, Sulawesi Utara",
      lo: "905 Sqft",
    },
    {
      image: require("../../assets/p2.png"),
      name: "Lembeh Resort",
      price: 1000,
     
      location: "Bitung, Sulawesi Utara",
      lo: "905 Sqft",
    },
    {
      image: require("../../assets/2page.png"),
      name: "Lembeh Resort",
      price: 1500,
      
      location: "Bitung, Sulawesi Utara",
      lo: "905 Sqft",
      bedroomNumber:4,
      bathroomNumber:3,
      space:204,

    },
  ];

  

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.text}>Current Location</Text>
            <View style={styles.head}>
              <Image
                style={styles.imagelocation}
                source={require("../../assets/location.png")}
              />
              <Text style={styles.textlocal}>Bitung, Sulawesi Utara</Text>
            </View>
          </View>
          <BellButton />
        </View>

        <View style={styles.searchBarContainer}>
          <SearchBar />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>House Near You</Text>
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={handleViewAllClick}
          >
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.galerieContainer}>
          <Galerie list={data} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Listings</Text>
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={handleViewAllClick}
          >
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Pressable
            onPress={()=>{
              navigation.navigate('DetailScreen'as never );
            }}
          >
            <Image
              style={styles.image}
              source={require("../../assets/pag2.png")}
            />
          </Pressable>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.imageText}>Japenese-style Hotel</Text>
            <Text style={styles.priceText}>$10.000</Text>
            <Text style={styles.nightText}>/night</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          <Image
            style={styles.imagee}
            source={require("../../assets/location.png")}
          />
          <Text style={styles.locationText}>Manado-Sulawesi Utara</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          <Image
            style={styles.imagee}
            source={require("../../assets/images.png")}
          />
          <Text style={styles.lo}> 2000 Sqft</Text>
        </View>
      
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: Dimensions.get("window").width,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    position: "relative",
  },
  text: {
    fontSize: 10,
    color: "grey",
  },
  textlocal: {
    fontWeight: "bold",
    fontSize: 10,
  },
  searchBarContainer: {
    borderRadius: 8,
  },
  section: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  viewAllButton: {
    padding: 10,
  },
  viewAllText: {
    color: "brown",
    fontSize: 13,
  },
  galerieContainer: {
    marginTop: 20,
    position: "relative",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 6,
    marginTop: 10,
  },
  imagelocation: {
    width: 15,
    height: 15,
  },
  imageText: {
    fontSize: 11,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
  },
  priceText: {
    fontSize: 11,
    color: "brown",
    fontWeight: "bold",
    paddingLeft: 50,
    top: 5,
  },
  nightText: {
    color: "grey",
    alignItems: "flex-end",
  },
  locationText: {
    fontSize: 10,
  },
  lo: {
    fontSize: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  item: {
    alignItems: "center",
    marginHorizontal: 8,
  },
  head: {
    flexDirection: "row",
  },
  imagee: {
    width: 15,
    height: 15,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerButton: {
    alignItems: 'center',
  },
  buttonIcon: {
    width: 30,
    height: 30,
  },
});

export default WelcomeScreen;
