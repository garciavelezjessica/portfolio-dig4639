/* 
https://reactnavigation.org/docs/use-navigation/
https://reactnavigation.org/docs/navigation-container/
https://reactnavigation.org/docs/screen
https://reactnavigation.org/docs/navigation-prop
*/

import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RepetitionExercise from "./src/components/RepetitionExercise";
import DurationExercise from "./src/components/DurationExercise";
import WeightsExercise from "./src/components/WeightsExercise";
import Tasks from "./src/components/Tasks";

const Stack = createStackNavigator();

const screens = [
  { title: "Duration Exercise", component: DurationExercise },
  { title: "Repetition Exercise", component: RepetitionExercise },
  { title: "Weights Exercise", component: WeightsExercise },
  { title: "Tasks", component: Tasks },
];

const Home = () => (
  <Stack.Navigator>
    <Stack.Screen style = {styles.screens} name="Home" component={HomeScreen} />
    <Stack.Screen style = {styles.screens} name="DurationExercise" component={DurationExercise} />
    <Stack.Screen style = {styles.screens} name="RepetitionExercise" component={RepetitionExercise} />
    <Stack.Screen style = {styles.screens} name="WeightsExercise" component={WeightsExercise} />
    <Stack.Screen style = {styles.screens} name="Tasks" component={Tasks} />
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
    <FlatList
      data={screens}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
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
