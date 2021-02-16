import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Header = ({ img }) => {
  return (
    <ImageBackground style={{ width: "100%", height: 136 }} source={img}>
      <Ionicons
        style={styles.arrw}
        name="arrow-back"
        size={32}
        color="#465A62"
      />
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  arrw: {
    position: "absolute",
    top: 12,
    left: 16,
    backgroundColor: "#d4d6d6",
    borderRadius: 25,
    opacity: 0.6,
    padding: 2,
  },
});
