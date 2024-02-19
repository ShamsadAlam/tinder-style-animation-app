// TinderCard.js

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SwipeCards from "react-native-swipe-cards";

const Card = ({ text, color, onYup, onNope }) => (
  <View style={[styles.card, { backgroundColor: color }]}>
    <View style={styles.imageContainer}>
      <Image source={require("../assets/nope.png")} style={styles.image} />
      <Image source={require("../assets/yup.png")} style={styles.image} />
    </View>
  </View>
);

const TinderCard = ({ data, handleYup, handleNope }) => (
  <View
    style={{
      width: 300,
      height: 500,
    }}
  >
    <SwipeCards
      cards={data}
      renderCard={(cardData) => (
        <Card {...cardData} onYup={handleYup} onNope={handleNope} />
      )}
      renderNoMoreCards={() => <Text>No more cards</Text>}
      handleYup={(card) => {
        handleYup(card);
        // You can perform additional actions on Yup, like showing an image
      }}
      handleNope={(card) => {
        handleNope(card);
        // You can perform additional actions on Nope, like showing an image
      }}
      yupText="Yup"
      noText="Nope"
      stack={true}
      stackDepth={3}
      stackOffsetX={1}
      stackOffsetY={15}
    />
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E8E8E8",
    height: 450,
    width: 250,
    marginLeft: 20,
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 50,
  },
});

export default TinderCard;
