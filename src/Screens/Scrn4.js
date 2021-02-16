import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Card from "../components/Card";
import Button2 from "../components/Button2";

class Scrn4 extends Component {
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
            <View style={{ marginVertical: 32 }}>
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
      </SafeAreaView>
    );
  }
}

export default Scrn4;

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

  txt: {
    fontSize: 16,
    color: "#465A62",
    marginTop: 24,
    fontFamily: "medium",
    opacity: 0.8,
  },
});
