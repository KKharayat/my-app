import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Scrn2 from "./src/Screens/Scrn2";
import Scrn4 from "./src/Screens/Scrn4";
import Scrn5 from "./src/Screens/Scrn5";
import Scrn6 from "./src/Screens/Scrn6";

const Stack = createStackNavigator();

let customFonts = {
  medium: require("./assets/fonts/Lato-Regular.ttf"),
  bold: require("./assets/fonts/Lato-Bold.ttf"),
  italic: require("./assets/fonts/Lato-BlackItalic.ttf"),
};
class App extends Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    if (this.state.fontsLoaded) {
      return (
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Scrn6" headerMode="none">
              <Stack.Screen name="Scrn2" component={Scrn2} />
              <Stack.Screen name="Scrn4" component={Scrn4} />
              <Stack.Screen name="Scrn5" component={Scrn5} />
              <Stack.Screen name="Scrn6" component={Scrn6} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      );
    } else {
      return <AppLoading />;
    }
  }
}

export default App;
