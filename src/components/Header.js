import React from "react";
import { View, StyleSheet, Image } from "react-native";
const Header = ({ img, img2 }) => {
  return (
    <View style={styles.header}>
      <Image style={{ width: 360, height: 136 }} source={img} />
      <Image style={styles.arrw} source={img2} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  arrw: {
    position: "absolute",
    top: 12,
    left: 16,
    width: 32,
    height: 32,
  },
});
