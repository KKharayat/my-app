import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const List = ({ img, day, caption }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imgTextCont}>
        <Image style={styles.img} source={img} />

        <View>
          <Text style={styles.days}>{day}</Text>
          <Text style={styles.caption}>{caption}</Text>
        </View>
      </View>
    </View>
  );
};
export default List;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 32,
  },
  img: {
    width: 32,
    height: 32,
    marginRight: 24,
  },
  imgTextCont: {
    flexDirection: "row",
  },
  days: {
    marginBottom: 8,
    fontSize: 12,
    color: "#465A62",
    fontFamily: "bold",
    opacity: 0.9,
  },
  caption: {
    fontSize: 16,
    color: "#465A62",
    fontFamily: "medium",
    opacity: 0.9,
  },
  text: {
    marginLeft: 24,
    flex: 1,
    alignSelf: "center",
  },
  txt: {
    fontSize: 14,
    color: "#465A62",
  },
});
