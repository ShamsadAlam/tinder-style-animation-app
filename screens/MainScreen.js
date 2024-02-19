// MainScreen.js

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TinderCard from "../components/TinderCard";

const MainScreen = () => {
  const [data, setData] = useState([
    { text: "Card 1", color: "#FF6F61" },
    { text: "Card 2", color: "#6A0572" },
    { text: "Card 3", color: "#AB83A1" },
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
