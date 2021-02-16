import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

import Header from "../components/Header";
import Button from "../components/Button";

class Scrn2 extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Header
            img={require("../../assets/sunM.png")}
            img2={require("../../assets/nxtarrw.png")}
          />
        </View>

        <ScrollView style={styles.bodyContainer}>
          <View style={styles.body}>
            <View style={styles.text}>
              <View
                style={[
                  styles.textTitle,
                  { marginVertical: 36, alignItems: "center" },
                ]}
              >
                <Text style={styles.title}>Kick Starting 2021</Text>

                <Image
                  style={styles.fileimg}
                  source={require("../../assets/file-text.png")}
                />

                <Image
                  style={styles.targetimg}
                  source={require("../../assets/target.png")}
                />
              </View>
              <View>
                <Text style={styles.txt}>
                  Take action to achieve your new year goals, and learn to
                  cultivate hope in your life with our free limited-period
                  courses.
                </Text>
                <Text style={[styles.smallText, { marginTop: 16 }]}>
                  We'll keep these courses until
                </Text>
              </View>
            </View>
            <View style={styles.images}>
              <View>
                <Image
                  style={styles.commonImage}
                  source={require("../../assets/bird.png")}
                />
                <Text style={styles.caption}>Hope for the New Year</Text>
                <Text style={styles.session}>7 sessions</Text>
              </View>
              <View style={{ marginLeft: 24 }}>
                <Image
                  style={styles.commonImage}
                  source={require("../../assets/arrow.png")}
                />
                <Text style={styles.caption}>Making Resolutions Stick</Text>
                <View style={styles.bar}>
                  <View style={styles.barin} />
                </View>
              </View>
            </View>
            <Text
              style={[styles.smallText, { marginTop: 16, marginBottom: 48 }]}
            >
              More Courses coming soon!
            </Text>
          </View>
          <View style={styles.footer}>
            <ImageBackground
              style={styles.imgBackgrnd}
              source={require("../../assets/bck.png")}
            >
              <Text
                style={[
                  styles.txt,
                  {
                    paddingHorizontal: 24,
                    paddingTop: 24,
                    paddingBottom: 16,
                    textAlign: "center",
                  },
                ]}
              >
                Access 300+ self-help tools for you emotioal health needs by
                upgrading tp Premium
              </Text>
              <Button
                title="UNLOCK EVERYTHING"
                onPress={() => navigation.navigate("Scrn4")}
              />
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Scrn2;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
  },
  bodyContainer: {
    flex: 1,

    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  images: {
    marginTop: 32,
    flexDirection: "row",
  },
  fileimg: {
    width: 16,
    height: 20,
  },
  targetimg: {
    width: 20,
    height: 20,
    marginLeft: 48,
  },
  commonImage: {
    width: 144,
    height: 200,
  },
  arrw: {
    position: "absolute",
    top: 12,
    left: 16,
    width: 32,
    height: 32,
  },
  caption: {
    marginTop: 16,
    fontSize: 14,
    color: "#465A62",
    fontFamily: "bold",
    opacity: 0.8,
  },
  bar: {
    backgroundColor: "#F7F7F7",
    height: 4,
    width: 120,
    marginTop: 8,
  },
  barin: {
    height: 4,
    width: 40,
    backgroundColor: "#66CCAA",
  },
  imgBackgrnd: {
    height: 180,
    width: 360,
    alignItems: "center",
    justifyContent: "center",
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
    marginRight: 59,
    fontFamily: "bold",
  },
  txt: {
    fontSize: 14,
    color: "#465A62",
    fontFamily: "medium",
    opacity: 0.8,
  },
  smallText: {
    fontSize: 12,
    color: "#9AD2B3",
    fontFamily: "medium",
    opacity: 0.8,
  },
  session: {
    marginTop: 8,
    color: "#465A62",
    fontFamily: "medium",
    opacity: 0.8,
  },
});
