import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import Button2 from "../components/Button2";

class Scrn4 extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          img={require("../../assets4/arrw.png")}
          img2={require("../../assets4/backarrw.png")}
        />
        <ScrollView style={styles.bodyContainer}>
          <View style={styles.body}>
            <View style={styles.text}>
              <Text style={styles.title}>Goal Setting for 2021</Text>

              <Text style={styles.txt}>
                Do you find it hard to stick to your new year goals? Are old,
                unhelpful habits holding you back from your best self? This
                course might be just what you need.
              </Text>
            </View>
            <View style={styles.images}>
              <Card
                img={require("../../assets4/uparrw.png")}
                text=" Use simple goal setting techniques to accelerate your progress"
              />
              <Card
                img={require("../../assets4/light.png")}
                text="Learn ways to tackle any obstacles that might come ypur way "
              />
              <Card
                img={require("../../assets4/mssg.png")}
                text="Get rid of unhelpul thoughts that interface with goal attainment "
              />
            </View>
          </View>
          <Button2
            title="LET'S START "
            onPress={() => navigation.navigate("Scrn5")}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Scrn4;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    width: 360,
    height: 676,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  body: {
    paddingHorizontal: 24,
  },
  textTitle: {
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    color: "#465A62",
    fontFamily: "bold",
    opacity: 0.8,
  },
  text: {
    marginVertical: 32,
  },
  txt: {
    fontSize: 16,
    color: "#465A62",
    marginTop: 24,
    fontFamily: "medium",
    opacity: 0.8,
  },
});
