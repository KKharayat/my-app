import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { styleJoiner } from "../Utils/styleJoiner";
const Button = ({ title, style, style2, ...rest }) => {
  return (
    <View>
      <TouchableOpacity style={styleJoiner(styles.btn, style)} {...rest}>
        <Text style={styleJoiner(styles.text, style2)}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 50,
    marginBottom: 55,
    backgroundColor: "#66CCAA",
    marginHorizontal: 40,
  },
  text: {
    marginHorizontal: 93,
    marginVertical: 16,
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "bold",
  },
});
