import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import React from "react";
import { useFonts } from "expo-font";

export default function App() {
  console.log("App executed");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043785992819195944/app_icon_no_bg.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.baseText}>Welcome back!</Text>
      <Image
        source={{
          uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043788872066281493/Untitled_Artwork_39-removebg-preview.png",
        }}
        style={{ width: 50, height: 50 }}
      />
      <Button
        title="my scrapboook"
        onPress={() => Alert.alert("Cannot press this one")}
      />
      <Image
        source={{
          uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043675674067611721/Untitled_Artwork.png",
        }}
        style={{ width: 50, height: 50 }}
      />
      <Button
        title="my missions & achievements"
        color="#EEEDF0"
        onPress={() => Alert.alert("Cannot press this one")}
      />
      <Image
        source={{
          uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043658145530134568/Untitled_Artwork.png",
        }}
        style={{ width: 50, height: 50 }}
      />
      <Button
        title="my mooon <3"
        color="#EEEDF0"
        onPress={() => this.props.navigation.navigate("Profile")}
      />
      <Image
        source={{
          uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043671332874878996/Untitled_Artwork.png",
        }}
        style={{ width: 50, height: 50 }}
      />
      <Button
        title="my mooon shop"
        color="#EEEDF0"
        onPress={() => Alert.alert("Cannot press this one")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#302C46",
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    fontSize: 20,
    color: "white",
    fontFamily: "Fruit Days",
  },
});
