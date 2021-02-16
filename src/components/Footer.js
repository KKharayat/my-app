import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Button from "../components/Button";
import Button2 from "../components/Button2";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.txt}>
        Access 300+ self-help tools for you emotioal health needs by upgrading
        tp Premium
      </Text>
      <ImageBackground
        style={styles.imgBackgrnd}
        source={require("../../assets/bck.png")}
      >
        <Button2
          title="SPREAD THE WORD "
          style2={{ marginHorizontal: 64 }}
          style={{ marginBottom: 16 }}
        />
        <Button
          title="UNLOCK EVERYTHING"
          style={{ marginBottom: 40, borderColor: "#66CCAA" }}
          style2={{ color: "#66CCAA" }}
        />
      </ImageBackground>
    </View>
  );
};

export default Footer;
const styles = StyleSheet.create({
  imgBackgrnd: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    marginHorizontal: 32,
    marginBottom: 24,
    textAlign: "center",
    fontSize: 14,
    color: "#465A62",
    opacity: 0.9,
  },
  footer: {
    marginTop: 40,
    alignItems: "center",
  },
});
