import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Mood = ({ bgColor, title, smile }) => {
  return (
    <View style={[styles.body, { backgroundColor: bgColor }]}>
      <Text style={styles.title}> {title}</Text>
      <Text>{smile}</Text>
      <Text style={styles.last}>145 times </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: 143,
    height: 143,
    borderRadius: 20,
    justifyContent: "space-around",
    marginTop: 25,
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "bold",
    fontSize: 13,
  },
  last: {
    color: "#465A62",
    fontFamily: "bold",
    fontSize: 16,
  },
});
export default Mood;
