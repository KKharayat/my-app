import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header2 from "../components/Header2";
import Mood from "../components/Mood";
class Scrn6 extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header2 />
          <View style={styles.body}>
            <View style={{ marginBottom: 26.5 }}>
              <Text style={styles.title}>Insights</Text>
              <View style={styles.totaldays}>
                <Text style={styles.txt}>Total No. of days tracked</Text>
                <Text style={styles.num}>125</Text>
              </View>
            </View>
            <View style={styles.weekly}>
              <Text style={[styles.weekover, { marginBottom: 24 }]}>
                Weekly mood analysis
              </Text>
              <View style={styles.calender}>
                <Image source={require("../../assets6/left.png")} />
                <View>
                  <Text
                    style={{
                      textAlign: "center",
                      fontFamily: "bold",
                      fontSize: 16,
                      color: "#465A62",
                      opacity: 0.9,
                    }}
                  >
                    Week 1
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#465A62",
                      fontSize: 10,
                      fontFamily: "bold",
                      opacity: 0.7,
                    }}
                  >
                    Date-Date
                  </Text>
                </View>
                <Image source={require("../../assets6/right.png")} />
              </View>
            </View>
            <View style={styles.block}>
              <View style={styles.days}>
                <Text style={styles.weekday}>mon</Text>
                <Text style={styles.weekday}>tue</Text>
                <Text style={styles.weekday}>wed</Text>
                <Text style={styles.weekday}>thu</Text>
                <Text style={styles.weekday}>fri</Text>
                <Text style={styles.weekday}>sat</Text>
                <Text style={styles.weekday}>sun</Text>
              </View>
              <View style={styles.graph}>
                <View style={styles.outerBar}>
                  <View
                    style={[
                      styles.colors,
                      { backgroundColor: "#F8BBBB", height: 58 },
                    ]}
                  />
                </View>
                <View style={styles.outerBar}>
                  <View
                    style={[
                      styles.colors,
                      { backgroundColor: "#FFDB97", height: 109 },
                    ]}
                  />
                </View>
                <View style={styles.outerBar}>
                  <View
                    style={[
                      styles.colors,
                      { backgroundColor: "#929FA9", height: 44 },
                    ]}
                  />
                </View>
                <View style={styles.outerBar}>
                  <View
                    style={[
                      styles.colors,
                      { backgroundColor: "#92CAED", height: 86 },
                    ]}
                  />
                </View>
                <View style={styles.outerBar}>
                  <View
                    style={[
                      styles.colors,
                      { backgroundColor: "#F8BBBB", height: 58 },
                    ]}
                  />
                </View>
                <View style={styles.outerBar} />
                <View style={styles.outerBar}>
                  <View
                    style={[
                      styles.colors,
                      { backgroundColor: "#FFDB97", height: 107 },
                    ]}
                  />
                </View>
              </View>
              <Text
                style={{
                  marginTop: 24,
                  alignSelf: "flex-end",
                  fontFamily: "bold",
                  fontSize: 14,
                  color: "#465A62",
                }}
              >
                VIEW MORE
              </Text>
            </View>
            <View style={styles.overall}>
              <Text style={styles.weekover}>Overall mood track</Text>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Mood bgColor="#FFDB97" title="Great mood!" smile="" />
                  <Mood bgColor="#92CAED" title="Good" smile="" />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Mood bgColor="#F8BBBB" title="Nutural" smile="" />
                  <Mood bgColor="#9C85BC" title="Bad" smile="" />
                </View>

                <Mood bgColor="#929FA9" title="Great mood!" smile="" />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  overall: {
    marginTop: 32,
    marginBottom: 125,
  },
  img: {
    width: 143,
    height: 143,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FAFAFA",
  },
  block: {
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  outerBar: {
    width: 39,
    height: 109,
    borderRadius: 8,
    backgroundColor: "#FAFAFA",

    justifyContent: "flex-end",
  },
  colors: {
    width: 39,

    borderRadius: 8,
  },
  graph: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 24,
  },
  days: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  weekday: {
    fontFamily: "bold",
    fontSize: 10,
    color: "#465A62",
    opacity: 0.7,
  },
  body: {
    marginHorizontal: 24,
  },
  title: {
    fontFamily: "bold",
    fontSize: 20,
    color: "#465A62",
  },
  txt: {
    fontFamily: "bold",
    fontSize: 16,
    color: "#465A62",
  },
  num: {
    fontFamily: "bold",
    fontSize: 32,
    color: "#00C2CE",
  },
  totaldays: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
    alignItems: "center",
  },
  weekly: {
    paddingTop: 24.5,
    marginBottom: 41,
    borderTopWidth: 1,
    borderTopColor: "#707070",
    opacity: 0.8,
  },
  calender: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  weekover: {
    color: "#465A62",
    fontSize: 16,
    fontFamily: "bold",
  },
});
export default Scrn6;
