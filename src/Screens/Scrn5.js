import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import List from "../components/List";
import List2 from "../components/List2";
import Footer from "../components/Footer";

class Scrn5 extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header img={require("../../assets4/arrw.png")} />
        <ScrollView
          contentContainerStyle={styles.bodyContainer}
          style={{ marginTop: -15 }}
        >
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

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Scrn6");
              }}
              style={styles.imgnxt}
            >
              <Image
                style={{ width: 32, height: 32 }}
                source={require("../../assets5/nxtRight.png")}
              />
            </TouchableOpacity>

            <List2 day="DAY 4" caption="Light Exposure" />
            <List2 day="DAY 5" caption="Staying Alert at Work" />
          </View>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Scrn5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
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
    position: "absolute",
    top: 232,
    right: 32,
  },
});
