import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SwipeCards from "react-native-swipe-cards";

const Card = ({ text, color, onYup, onNope }) => (
  <View style={[styles.card, { backgroundColor: color }]} />
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
      handleYup={(card) => {
        handleYup(card);
      }}
      handleNope={(card) => {
        handleNope(card);
      }}
      renderNoMoreCards={() => <Text>No more cards</Text>}
      stack={true}
      yupView={
        <Image source={require("../assets/yup.png")} style={styles.image} />
      }
      noView={
        <Image source={require("../assets/nope.png")} style={styles.image} />
      }
      yupStyle={{
        borderWidth: 0,
        justifyContent: "start",
      }}
      nopeStyle={{ borderWidth: 0, justifyContent: "start" }}
      stackDepth={3}
      stackOffsetX={1}
      stackOffsetY={15}
      loop
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
