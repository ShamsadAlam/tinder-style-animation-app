// MainScreen.js

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TinderCard from "../components/TinderCard";

const MainScreen = () => {
  const [data, setData] = useState([
    { text: "Card 1", color: "#FCD689" },
    { text: "Card 2", color: "#D08B63" },
    { text: "Card 3", color: "#C35D66" },
    { text: "Card 3", color: "#2dd36f" },
    { text: "Card 3", color: "#ffc409" },
    { text: "Card 3", color: "#5260ff" },
    // Add more data as needed
  ]);

  const handleYup = (card) => {
    // Handle right swipe action
    console.log("Right swipe!", card);
  };

  const handleNope = (card) => {
    // Handle left swipe action
    console.log("Left swipe!", card);
  };

  return (
    <View style={styles.container}>
      <TinderCard data={data} handleYup={handleYup} handleNope={handleNope} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainScreen;
