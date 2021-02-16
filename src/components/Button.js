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
    borderColor: "#4A4882",
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 55,
  },
  text: {
    marginHorizontal: 54,
    marginVertical: 16,
    color: "#4A4882",
    fontSize: 14,
    fontFamily: "bold",
  },
});
