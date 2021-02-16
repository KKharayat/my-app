import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import Header from "../components/Header";
import List from "../components/List";
import List2 from "../components/List2";
import Footer from "../components/Footer";

class Scrn5 extends Component {
  render() {
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
            </View>
            <List
              img={require("../../assets5/tick.png")}
              day="DAY 1"
              caption="Muscle Relaxation"
            />
            <List
              img={require("../../assets5/tick.png")}
              day="DAY 2"
              caption="Tips for better sleep"
            />

            <List2 day="DAY 3" caption="Managing Shift Work" />
            <Image
              style={styles.imgnxt}
              source={require("../../assets5/nxtRight.png")}
            />
            <List2 day="DAY 4" caption="Light Exposure" />
            <List2 day="DAY 5" caption="Staying Alert at Work" />
          </View>
          <Footer />
        </ScrollView>
      </View>
    );
  }
}

export default Scrn5;

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
  text: {
    marginVertical: 32,
  },
  title: {
    fontSize: 20,
    color: "#465A62",
    fontFamily: "bold",
    opacity: 0.9,
  },
  body: {
    paddingHorizontal: 24,
  },
  imgnxt: {
    width: 32,
    height: 32,
    position: "absolute",
    top: 232,
    left: 304,
  },
});
