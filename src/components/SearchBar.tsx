import React, { useState } from "react";
import { View, TextInput, StyleSheet,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importez l'icône de la loupe

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    // Vous pouvez ajouter votre logique de recherche ici
    console.log("Recherche en cours avec le texte : ", text);
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.inputContainer}>
        <Ionicons name="md-search" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search here..."
          onChangeText={handleSearch}
          value={searchText}
        />
          <Image
        source={require("../../assets/parametre.png")}
      style={styles.parametre}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
    
  },
  input: {
    flex: 1,
  },
 
  parametre:{
    width:30,
    height:40,
  },
});

export default SearchBar;
