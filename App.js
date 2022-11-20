import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  console.log("App executed");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Missions" component={MyMissions} />
        <Stack.Screen name="Scrapbook" component={MyScrapboook} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="My Mooon" component={MyMooon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36324A",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTwo: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#36324A",
  },
  scrollView: {
    backgroundColor: "#36324A",
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    fontSize: 20,
    margin: 10,
    color: "white",
    fontFamily: "Fruit Days",
  },
  scrapButton: {
    backgroundColor: "#FFFCE9",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
    shadowColor: "#FFF5B8",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  missionButton: {
    backgroundColor: "#FFEAA1",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#FFF5B8",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  mooonButton: {
    backgroundColor: "#FFE4F4",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#FFF5B8",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  shopButton: {
    backgroundColor: "#CBECF0",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#FFF5B8",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  homeButton: {
    position: "absolute",
    backgroundColor: "transparent",
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
    top: 0,
    left: 0,
  },
  item: {
    backgroundColor: "#CBECF0",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#FFF5B8",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  title: {
    fontSize: 20,
    color: "#36324A",
  },
  bigText: {
    fontSize: 40,
    color: "#FFEDAD",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  smallText: {
    fontSize: 10,
    color: "#FFEDAD",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  rectangle: {
    width: 341 * 2,
    height: 695,
    backgroundColor: "F5F5F5",
  },
  scrollView: {
    backgroundColor: "#F5F5F5",
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

function HomeScreen({ navigation }) {
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

      <TouchableOpacity
        style={styles.scrapButton}
        onPress={() => navigation.navigate("Scrapbook")}
      >
        <Image
          source={{
            uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043788872066281493/Untitled_Artwork_39-removebg-preview.png",
          }}
          style={{ width: 60, height: 60, alignItems: "center" }}
        />
        <Text>my scrapboook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.missionButton}
        onPress={() => navigation.navigate("Missions")}
      >
        <Image
          source={{
            uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043675674067611721/Untitled_Artwork.png",
          }}
          style={{ width: 50, height: 50 }}
        />
        <Text>my missions & achievements</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.mooonButton}
        onPress={() => navigation.navigate("My Mooon")}
      >
        <Image
          source={{
            uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043658145530134568/Untitled_Artwork.png",
          }}
          style={{ width: 50, height: 50, alignItems: "center" }}
        />
        <Text>my mooon</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.shopButton}
        onPress={() => navigation.navigate("Test")}
      >
        <Image
          source={{
            uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043671332874878996/Untitled_Artwork.png",
          }}
          style={{ width: 50, height: 50 }}
        />
        <Text>my mooon shop</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function MyScrapboook({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={{
          uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043917510208147456/Component_6.png",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={{
              uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043918844797931600/image_3.png",
            }}
            style={{ width: 33, height: 35 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 40,
            color: "#5A518B",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
            marginLeft: 11,
          }}
        >
          MY SCRAPBOOOK
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Block a fake friend",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Try Yoga",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Delete 30 emails",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Go vegan for a day",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Sleep at 9 pm",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Go outside",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Learn a dance",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Try a new food or restaurant",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Go to the gym",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Try boxing",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Drink 8 cups of water today",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Try cooking a new recipe instead of eating out",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function MyMissions({ navigation }) {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.containerTwo}>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={{
            uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043918844797931600/image_3.png",
          }}
          style={{ width: 33, height: 35 }}
        />
      </TouchableOpacity>
      <Text style={styles.smallText}> </Text>
      <Text style={styles.bigText}> My Daily Missions </Text>
      <ScrollView style={styles.scrollView}>
        <FlatList
          style={styles.containerTwo}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function MyMooon() {
  const Rectangle = () => {
    <View style={styles.rectangle} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={{
            uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043918844797931600/image_3.png",
          }}
          style={{ width: 33, height: 35 }}
        />
      </TouchableOpacity>
      <Text style={styles.bigText}> My Mooon </Text>
      <Image
        source={{
          uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043927008624791552/base_dressup_cow_w_shadow.png",
        }}
        style={{ width: 200, height: 200 }}
      />
    </SafeAreaView>
  );
}

function TestScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={{
          uri: "https://cdn.discordapp.com/attachments/1022975962717098005/1043932413325221888/image.png",
        }}
        style={{ width: 400, height: 700 }}
      />
    </View>
  );
}
