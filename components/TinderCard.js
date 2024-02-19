// TinderCard.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SwipeCards from "react-native-swipe-cards";

const Card = ({ text, color }) => (
  <View style={[styles.card, { backgroundColor: color }]}>
    <Text style={styles.cardText}>{text}</Text>
  </View>
);

const TinderCard = ({ data, handleYup, handleNope }) => (
  <SwipeCards
    cards={data}
    renderCard={(cardData) => <Card {...cardData} />}
    renderNoMoreCards={() => <Text>No more cards</Text>}
    handleYup={handleYup}
    handleNope={handleNope}
    yupText="Yup"
    noText="Nope"
    stack={true}
    stackDepth={3}
  />
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E8E8E8",
    height: 200, // Adjust the height as needed
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default TinderCard;
