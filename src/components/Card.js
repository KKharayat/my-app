import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Card = ({ img, text }) => {
  return (
    <View style={styles.card}>
      <View>
        <Image resizeMode="contain" style={styles.img} source={img} />
      </View>

      <View style={styles.text}>
        <Text style={styles.txt}>{text}</Text>
      </View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 24,
  },
  img: {
    width: 80,
    height: 80,
  },
  text: {
    marginLeft: 24,
    flex: 1,
    alignSelf: "center",
    opacity: 0.8,
  },
  txt: {
    fontSize: 14,
    color: "#465A62",
    fontFamily: "medium",
  },
});
