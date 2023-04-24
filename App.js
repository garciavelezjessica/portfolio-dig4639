/* 
https://reactnavigation.org/docs/use-navigation/
https://reactnavigation.org/docs/navigation-container/
https://reactnavigation.org/docs/screen
https://reactnavigation.org/docs/navigation-prop
*/

import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstTrivia from "./src/components/FirstTrivia";
import SecondTrivia from "./src/components/SecondTrivia";
import ThirdTrivia from "./src/components/ThirdTrivia";
import FourthTrivia from "./src/components/FourthTrivia";

const Stack = createStackNavigator();

const screens = [
  { title: "Geography", component: FirstTrivia },
  { title: "Math", component: SecondTrivia },
  { title: "Science and Nature", component: ThirdTrivia },
  { title: "Sports", component: FourthTrivia },
];

const Home = () => (
  <Stack.Navigator>
    <Stack.Screen style = {styles.screens} name="Home" component={HomeScreen} />
    <Stack.Screen style = {styles.screens} name="TriviaOne" component={FirstTrivia} />
    <Stack.Screen style = {styles.screens} name="TriviaTwo" component={SecondTrivia} />
    <Stack.Screen style = {styles.screens} name="TriviaThree" component={ThirdTrivia} />
    <Stack.Screen style = {styles.screens} name="TriviaFour" component={FourthTrivia} />
  </Stack.Navigator>
);

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Button
      title={item.title}
      onPress={() => navigation.navigate(item.component.name)}
      style={styles.buttons}
    />
  );

  return (
    <View>
      <Text>Pick a category!</Text>
    <FlatList
      data={screens}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    /></View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    height: 100,
    width: 200,
    marginLeft: 900,
  },
  screens: {
    
  },
});

function App() {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}

export default App;
