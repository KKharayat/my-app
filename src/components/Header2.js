import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

class Header2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Ionicons
            style={styles.arrw}
            name="arrow-back"
            size={24}
            color="#465A62"
          />

          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.imgs}
              source={require("../../assets6/book.png")}
            />
            <Image
              style={[styles.imgs, { marginLeft: 16 }]}
              source={require("../../assets6/dotted.png")}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 24,
    flex: 1,
    marginHorizontal: 24,
  },
  arrw: {
    backgroundColor: "#d4d6d6",
    borderRadius: 25,
    opacity: 0.6,
    padding: 2,
  },
  imgs: {
    width: 24,
    height: 24,
  },
});
export default Header2;
