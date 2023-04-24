import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { StyleSheet } from "react-native";

//timer function is from instructor video and with their permission (Murray)

export default function TriviaFour() {

  const navigation = useNavigation();
  const backButton = () => {
    navigation.goBack();
  };

  let [current, setCurrent] = useState(0);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  const geographyQuestions = [
    {
      prompt: "What is the tallest mountain in the world?",
      choices: [
        { testId: 0, text: "Mount Everest", correct: true },
        { testId: 1, text: "K2", correct: false },
        { testId: 2, text: "Kangchenjunga", correct: false },
        { testId: 3, text: "Lhotse", correct: false },
      ]
    },
    {
      prompt: "What is the capital of Mexico?",
      choices: [
        { testId: 0, text: "Guadalajara", correct: false },
        { testId: 1, text: "Tijuana", correct: false },
        { testId: 2, text: "Mexico City", correct: true },
        { testId: 3, text: "Oaxaca", correct: false },
      ]
    },
    {
      prompt: "What is the name of the largest ocean in the world?",
      choices: [
        { testId: 0, text: "Arctic", correct: false },
        { testId: 1, text: "Pacific", correct: true },
        { testId: 2, text: "Atlantic", correct: true },
        { testId: 3, text: "Antarctic", correct: false },
      ]
    }
  ];

  const clickChoice = (correct) => {
    if(correct){
      setCurrent(current + 1)
    }
  }

  const styles = StyleSheet.create({
    buttons: {
      height: 100,
      width: 200,
      marginLeft: 900,
    },
    box: {
      height: 300,
      width: 100,
      backgroundColor: '16363d',
      color: '#ffffff',
    },
    screens: {},
    center: {
      display: "flex",
      alignItems: "center",
      height: "100%",
    },
  });

  return (
    <div>
      <br></br>
       <Button style = {styles.buttons} title = "Home" onPress = {backButton} />
       <h1>Geography Quiz</h1>
       <div>
        <h1 style={styles.center}>{geographyQuestions[current].prompt}</h1>
        <ul>
          {geographyQuestions[current].choices.map((choices) => {
          return (
            <li key={choices.testId} onClick = {() => clickChoice(choices.correct)}>{choices.text}</li>
            )
            })}
            </ul>
       </div>
       
    </div>
  )
}
