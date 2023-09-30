import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Vous pouvez utiliser une icône "Like" de FontAwesome.

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLikePress = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity onPress={handleLikePress} style={styles.button}>
      <Icon name={liked ? 'heart' : 'heart-o'} size={24} color={liked ? 'red' : 'black'} />
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 40,
    right:10,
    zIndex: 100,
    width: 50,
    height: 50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "white",
    borderRadius: 25,
    elevation:3,
  },
  
});

export default LikeButton;
